let currentCategory = "전체";
let currentSortOption = "예약가 높은순";

function getSearchQuery() {
  const params = new URLSearchParams(window.location.search);
  return params.get("query")?.toLowerCase() || "";
}

const searchQuery = getSearchQuery();

$(function () {
  $('.category-btn').click(function () {
    $('.category-btn').removeClass('active');
    $(this).addClass('active');
    currentCategory = $(this).text().trim();
    if (currentCategory === "전체") {
      $('#search-list').hide();
      $('#search-total').show();
    } else {
      $('#search-total').hide();
      $('#search-list').show();
      renderCardListViewByCategory(currentCategory);
    }
  });

  $('#search-total').show();
  renderCards();

  $('.sort-toggle').click(function () {
    $('.sort-container').toggleClass('active');
    $('.sort-image').attr('src', 'image/sort_sel.webp');
  });

  $(document).click(function (e) {
    if (!$('.sort-container').is(e.target) && $('.sort-container').has(e.target).length === 0) {
      $('.sort-container').removeClass('active');
      $('.sort-image').attr('src', 'image/sort_non.webp');
    }
  });

  $('.sort-option').click(function () {
    $('.sort-option').removeClass('selected');
    $(this).addClass('selected');
  });

  $('.btn-apply').click(function () {
    currentSortOption = $('.sort-option.selected').text().trim();
    renderCardListViewByCategory(currentCategory);
    $('.sort-container').removeClass('active');
    $('.sort-image').attr('src', 'image/sort_non.webp');
  });

  $(document).on('click', '.heart-btn', function (e) {
    e.preventDefault();
    e.stopPropagation();
    const heartImg = $(this).find('.heart-img');
    heartImg.toggleClass('heart-active');
    heartImg.attr('src', heartImg.hasClass('heart-active') ? "image/heart_sel.webp" : "image/heart_non.webp");
  });

  $(document).on('click', '.card', function () {
    const title = $(this).find('.card-title').text().trim();
    const image = $(this).find('.card-img').attr('src');
    const location = $(this).find('.location-text').text().trim();
    const originalPrice = $(this).find('.original-price').text().trim();
    const discountPrice = $(this).find('.discount-price').text().trim();
    const url = `detailpage.html?title=${encodeURIComponent(title)}&image=${encodeURIComponent(image)}&location=${encodeURIComponent(location)}&originalPrice=${encodeURIComponent(originalPrice)}&discountPrice=${encodeURIComponent(discountPrice)}`;
    window.location.href = url;
  });
});

function renderCards() {
  const data = JSON.parse(localStorage.getItem('guesthouses')) || [];
  let filteredData = searchQuery ? data.filter(d => d.name.toLowerCase().includes(searchQuery) || d.location.toLowerCase().includes(searchQuery)) : data;

  if (searchQuery) {
    $('#search-total').hide();
    $('#search-list').show().empty();
    if (filteredData.length === 0) {
      $('#search-list').html("<p class='text-center w-100 py-5'>검색 결과가 없습니다.</p>");
    } else {
      filteredData.forEach(d => renderCard(d, $('#search-list')));
    }
  } else {
    $('#search-total').show();
    $('#search-list').hide();
    ["도미토리형", "프라이빗형", "패밀리/독채형", "테마형/특수형", "장기 숙박형"].forEach(type => renderCardListByCategory(type, data));
  }
}

function renderCardListViewByCategory(category) {
  let data = JSON.parse(localStorage.getItem('guesthouses')) || [];
  data = data.filter(d => d.type === category);

  if (searchQuery) {
    data = data.filter(d => d.name.toLowerCase().includes(searchQuery) || d.location.toLowerCase().includes(searchQuery));
  }

  if (currentSortOption === "예약가 높은순") data.sort((a, b) => b.discountPrice - a.discountPrice);
  else if (currentSortOption === "예약가 낮은순") data.sort((a, b) => a.discountPrice - b.discountPrice);

  $('#search-list').empty();
  data.forEach(d => renderCard(d, $('#search-list')));
}
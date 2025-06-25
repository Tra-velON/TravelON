$(function () {
    // 카테고리 버튼 클릭
    $('.category-btn').click(function () {
        $('.category-btn').removeClass('active');
        $(this).addClass('active');

        const selectedCategory = $(this).text().trim();
        currentCategory = selectedCategory;

        if (selectedCategory === "전체") {
            $('#search-list').css('display', 'none');
            $('#search-total').css('display', 'block');
        } else {
            $('#search-total').css('display', 'none');
            $('#search-list').css('display', 'flex'); // Changed 'block' to 'flex'
            renderCardListViewByCategory(selectedCategory);
        }
    });

    // 초기 전체 뷰 표시
    $('#search-total').show();
    renderCards();

    // 정렬 토글
    const container = document.querySelector(".sort-container");
    const toggle = container.querySelector(".sort-toggle");
    const sortOptions = container.querySelectorAll(".sort-option");
    const btnApply = container.querySelector(".btn-apply");
    const sortImg = document.querySelector('.sort-image');

    toggle.addEventListener("click", function () {
        sortImg.src = "image/sort_sel.webp";
        container.classList.toggle("active");
    });

    document.addEventListener("click", function (e) {
        if (!container.contains(e.target)) {
            container.classList.remove("active");
            sortImg.src = "image/sort_non.webp";
        }
    });

    sortOptions.forEach(function (option) {
        option.addEventListener("click", function () {
            sortOptions.forEach(opt => opt.classList.remove("selected"));
            this.classList.add("selected");
        });
    });

    btnApply.addEventListener("click", function () {
        const selectedOption = container.querySelector(".sort-option.selected");
        if (selectedOption && currentCategory !== "") {
            currentSortOption = selectedOption.textContent.trim();
            renderCardListViewByCategory(currentCategory);
        }
        container.classList.remove("active");
        sortImg.src = "image/sort_non.webp";
    });

    // 하트 버튼
    $(document).on('click', '.heart-btn', function (e) {
        e.preventDefault();
        e.stopPropagation();
        const heartImg = $(this).find('.heart-img');
        heartImg.toggleClass('heart-active');
        const isActive = heartImg.hasClass('heart-active');
        heartImg.attr('src', isActive ? "image/heart_sel.webp" : "image/heart_non.webp");
    });

    // 카드 클릭
    $(document).on('click', '.card', function () {
        const title = $(this).find('.card-title').text().trim();
        const url = `detail.html?title=${encodeURIComponent(title)}`;
        window.location.href = url;
    });
});
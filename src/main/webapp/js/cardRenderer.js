const cardData = [
    // 도미토리형 - 10개
    {
        category: "도미토리형",
        image: "image/eximage1.webp",
        title: "해변가 하우스",
        rating: "4.5",
        soldOut: true,
        location: "서울특별시 홍대",
        features: "바다 전망, 공용 주방, 아침 식사"
    },
    {
        category: "도미토리형",
        image: "image/eximage2.webp",
        title: "소나무 게스트하우스",
        rating: "4.3",
        originalPrice: "38,000",
        discountPrice: "28,000",
        location: "강원도 강릉시",
        features: "주차 제공, 도보 5분 해변, 와이파이"
    },
    {
        category: "도미토리형",
        image: "image/eximage3.webp",
        title: "바다소리 숙소",
        rating: "4.0",
        originalPrice: "42,000",
        discountPrice: "30,000",
        location: "강원도 강릉시",
        features: "개별 락커, 커피 제공, 와이파이"
    },
    {
        category: "도미토리형",
        image: "image/eximage4.webp",
        title: "별밤 하우스",
        rating: "4.6",
        originalPrice: "45,000",
        discountPrice: "32,000",
        location: "서울특별시 용산",
        features: "루프탑, BBQ 가능, 조식 포함"
    },
    {
        category: "도미토리형",
        image: "image/eximage5.webp",
        title: "게스트 코지룸",
        rating: "4.1",
        soldOut: true,
        location: "강원도 강릉시",
        features: "여성 전용, 조용한 동네, 공유 거실"
    },
    {
        category: "도미토리형",
        image: "image/eximage6.webp",
        title: "파도 게스트하우스",
        rating: "4.4",
        originalPrice: "39,000",
        discountPrice: "27,000",
        location: "강원도 강릉시",
        features: "해변 접근성, 와이파이, 주차"
    },
    {
        category: "도미토리형",
        image: "image/eximage2.webp",
        title: "블루하버 게스트하우스",
        rating: "4.2",
        originalPrice: "36,000",
        discountPrice: "25,000",
        location: "강원도 강릉시",
        features: "주차 가능, 수건 제공, 무료 음료"
    },
    {
        category: "도미토리형",
        image: "image/eximage1.webp",
        title: "아침햇살 숙소",
        rating: "4.3",
        originalPrice: "41,000",
        discountPrice: "29,000",
        location: "강원도 강릉시",
        features: "공용 키친, 리셉션 운영, 조식 포함"
    },
    {
        category: "도미토리형",
        image: "image/eximage3.webp",
        title: "여행자의 쉼터",
        rating: "4.1",
        soldOut: true,
        location: "강원도 강릉시",
        features: "침대 커튼, 조용한 분위기, 무료 와이파이"
    },
    {
        category: "도미토리형",
        image: "image/eximage6.webp",
        title: "게스트 라운지",
        rating: "4.0",
        originalPrice: "37,000",
        discountPrice: "26,000",
        location: "강원도 강릉시",
        features: "에어컨, 공용 욕실, 커피머신"
    },

    // 프라이빗형 - 5개
    {
        category: "프라이빗형",
        image: "image/eximage4.webp",
        title: "프라이빗 하우스 강릉",
        rating: "4.5",
        originalPrice: "60,000",
        discountPrice: "45,000",
        location: "서울특별시 서울역",
        features: "개별 욕실, 넷플릭스 지원, 발코니"
    },
    {
        category: "프라이빗형",
        image: "image/eximage.webp",
        title: "산책길 숙소",
        rating: "4.3",
        soldOut: true,
        location: "강원도 강릉시",
        features: "전용 출입문, 아늑한 침대, 정원 전망"
    },
    {
        category: "프라이빗형",
        image: "image/eximage5.webp",
        title: "조용한 마을 게스트하우스",
        rating: "4.4",
        originalPrice: "55,000",
        discountPrice: "39,000",
        location: "강원도 강릉시",
        features: "주방 이용 가능, 주차 가능, 전용 공간"
    },
    {
        category: "프라이빗형",
        image: "image/eximage2.webp",
        title: "레트로 룸",
        rating: "4.2",
        originalPrice: "50,000",
        discountPrice: "36,000",
        location: "강원도 강릉시",
        features: "빈티지 인테리어, 개인 욕실, 발코니"
    },
    {
        category: "프라이빗형",
        image: "image/eximage6.webp",
        title: "힐링 프라이빗룸",
        rating: "4.6",
        originalPrice: "58,000",
        discountPrice: "42,000",
        location: "강원도 강릉시",
        features: "TV, 소파, 테이블, 정원"
    },

    // 패밀리/독채형 - 5개
    {
        category: "패밀리/독채형",
        image: "image/eximage1.webp",
        title: "패밀리 독채 하우스",
        rating: "4.7",
        originalPrice: "120,000",
        discountPrice: "89,000",
        location: "강원도 강릉시",
        features: "독채, 취사 가능, 넓은 거실"
    },
    {
        category: "패밀리/독채형",
        image: "image/eximage3.webp",
        title: "바다뷰 패밀리룸",
        rating: "4.5",
        soldOut: true,
        location: "강원도 강릉시",
        features: "2베드룸, 바다 전망, 전용 주차"
    },
    {
        category: "패밀리/독채형",
        image: "image/eximage4.webp",
        title: "가족형 게스트하우스",
        rating: "4.3",
        originalPrice: "110,000",
        discountPrice: "82,000",
        location: "강원도 강릉시",
        features: "BBQ 가능, 정원, 게임기 구비"
    },
    {
        category: "패밀리/독채형",
        image: "image/eximage6.webp",
        title: "숲속의 하우스",
        rating: "4.4",
        originalPrice: "100,000",
        discountPrice: "75,000",
        location: "강원도 강릉시",
        features: "독채, 캠프파이어, 큰 마당"
    },
    {
        category: "패밀리/독채형",
        image: "image/eximage2.webp",
        title: "감성 독채",
        rating: "4.5",
        originalPrice: "130,000",
        discountPrice: "95,000",
        location: "강원도 강릉시",
        features: "원목 인테리어, 가족 여행 최적, TV"
    },

    // 테마형/특수형 - 5개
    {
        category: "테마형/특수형",
        image: "image/eximage.webp",
        title: "한옥 체험 숙소",
        rating: "4.8",
        originalPrice: "80,000",
        discountPrice: "60,000",
        location: "강원도 강릉시",
        features: "한옥, 전통 복식 체험, 조식 제공"
    },
    {
        category: "테마형/특수형",
        image: "image/eximage5.webp",
        title: "캠핑 컨셉 게스트하우스",
        rating: "4.2",
        soldOut: true,
        location: "강원도 강릉시",
        features: "글램핑 스타일, 공용 화장실, BBQ"
    },
    {
        category: "테마형/특수형",
        image: "image/eximage6.webp",
        title: "만화방 콘셉트 숙소",
        rating: "4.1",
        originalPrice: "50,000",
        discountPrice: "38,000",
        location: "강원도 강릉시",
        features: "만화책 구비, 게이밍 PC, 대형 모니터"
    },
    {
        category: "테마형/특수형",
        image: "image/eximage1.webp",
        title: "레트로 감성 하우스",
        rating: "4.0",
        originalPrice: "55,000",
        discountPrice: "40,000",
        location: "강원도 강릉시",
        features: "옛날 소품, 필름카메라 대여, LP플레이어"
    },
    {
        category: "테마형/특수형",
        image: "image/eximage3.webp",
        title: "우주 테마 숙소",
        rating: "4.6",
        originalPrice: "70,000",
        discountPrice: "52,000",
        location: "강원도 강릉시",
        features: "우주 침낭, 무중력 의자, 빔프로젝터"
    },

    // 장기 숙박형 - 5개
    {
        category: "장기 숙박형",
        image: "image/eximage2.webp",
        title: "장기 게스트하우스 강릉",
        rating: "4.3",
        originalPrice: "30,000",
        discountPrice: "22,000",
        location: "강원도 강릉시",
        features: "세탁기, 주방, 책상 구비"
    },
    {
        category: "장기 숙박형",
        image: "image/eximage.webp",
        title: "코워킹 게스트하우스",
        rating: "4.4",
        soldOut: true,
        location: "강원도 강릉시",
        features: "공용 사무공간, 커피머신, 프린터"
    },
    {
        category: "장기 숙박형",
        image: "image/eximage5.webp",
        title: "원룸형 게스트하우스",
        rating: "4.2",
        originalPrice: "35,000",
        discountPrice: "26,000",
        location: "강원도 강릉시",
        features: "침대+책상, 주방 완비, 욕실"
    },
    {
        category: "장기 숙박형",
        image: "image/eximage6.webp",
        title: "워크앤레스트 하우스",
        rating: "4.1",
        originalPrice: "33,000",
        discountPrice: "24,000",
        location: "강원도 강릉시",
        features: "집중 공간, 콘센트 많음, 조용함"
    },
    {
        category: "장기 숙박형",
        image: "image/eximage1.webp",
        title: "장기전용 하우스",
        rating: "4.5",
        originalPrice: "38,000",
        discountPrice: "28,000",
        location: "강원도 강릉시",
        features: "청소 서비스, 책상, 빠른 와이파이"
    }
];

// === 카드 HTML 생성 함수 ===
function createCardHtml(card) {
  const priceHtml = card.soldOut
    ? `<p class="sold-out">예약마감</p>`
    : `<p class="price">
         <del class="original-price">${card.originalPrice || ''}</del>
         <span class="discount-price">${card.discountPrice || ''}</span>
       </p>`;

  return `
    <div class="card">
      <div class="card-img-wrapper">
        <img src="${card.image}" class="card-img" alt="썸네일" loading="lazy" />
      </div>
      <div class="card-body">
        <div class="card-head">
          <h5 class="card-title">${card.title}</h5>
          <div class="rating-heart">
            <div class="rating">
              <img src="image/star.webp" alt="별점" class="star-icon" />
              <span class="rating-score">${card.rating}</span>
            </div>
            <button class="heart-btn">
              <img class="heart-img" src="image/heart_non.webp" alt="하트" loading="lazy" />
            </button>
          </div>
        </div>
        ${priceHtml}
        <div class="location-box">
          <img class="location-icon" src="image/location.webp" alt="위치 이미지" loading="lazy" />
          <p class="location-text">${card.location}</p>
        </div>
        <p class="features">${card.features}</p>
      </div>
    </div>
  `;
}

// === 카드 HTML 생성 함수 ===
function createCardHtml(card) {
  const priceHtml = card.soldOut
    ? `<p class="sold-out">예약마감</p>`
    : `<p class="price">
         <del class="original-price">${card.originalPrice || ''}</del>
         <span class="discount-price">${card.discountPrice || ''}</span>
       </p>`;

  return `
    <div class="card">
      <div class="card-img-wrapper">
        <img src="${card.image}" class="card-img" alt="썸네일" loading="lazy" />
      </div>
      <div class="card-body">
        <div class="card-head">
          <h5 class="card-title">${card.title}</h5>
          <div class="rating-heart">
            <div class="rating">
              <img src="image/star.webp" alt="별점" class="star-icon" />
              <span class="rating-score">${card.rating}</span>
            </div>
            <button class="heart-btn">
              <img class="heart-img" src="image/heart_non.webp" alt="하트" loading="lazy" />
            </button>
          </div>
        </div>
        ${priceHtml}
        <div class="location-box">
          <img class="location-icon" src="image/location.webp" alt="위치 이미지" loading="lazy" />
          <p class="location-text">${card.location}</p>
        </div>
        <p class="features">${card.features}</p>
      </div>
    </div>
  `;
}

// === 전역 상태 변수 ===
let currentFilteredCards = [];
let loadedCount = 0;
const cardsPerLoad = 6;
let isLoading = false;

// === IntersectionObserver 무한스크롤 설정 ===
const listObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !isLoading) {
      renderNextCards();
    }
  });
});

// === 검색 결과 렌더링 함수 ===
function renderSearchResults(searchQuery) {
  if (!searchQuery) {
    document.querySelector('#search-list').innerHTML =
      '<p style="padding:20px; text-align:center;">검색어를 입력해주세요.</p>';
    return;
  }

  currentCategory = '검색 결과';

  const normalize = (text) => text?.replace(/\s+/g, '').toLowerCase().trim();
  const normalizedQuery = normalize(searchQuery);

  currentFilteredCards = cardData.filter(card => {
    const titleMatch = normalize(card.title)?.includes(normalizedQuery);
    const locationMatch = normalize(card.location)?.includes(normalizedQuery);
    const featuresMatch = normalize(card.features)?.includes(normalizedQuery);
    const originalPriceMatch = normalize(card.originalPrice || '')?.includes(normalizedQuery);
    const discountPriceMatch = normalize(card.discountPrice || '')?.includes(normalizedQuery);

    return titleMatch || locationMatch || featuresMatch || originalPriceMatch || discountPriceMatch;
  });

  loadedCount = 0;

  const container = document.querySelector('#search-list');

  if (currentFilteredCards.length === 0) {
    container.innerHTML = '<p style="padding:20px; text-align:center;">검색 결과가 없습니다.</p>';
    return;
  }

  container.innerHTML = `
    <div id="spinner" style="display: flex; pointer-events: auto;">
      <div class="spinner"></div>
    </div>
  `;

  window._observerInitialized = false;
  sortCardsByOption(currentSortOption);
  renderNextCards();
}

// === 다음 카드들 렌더링 (무한스크롤용) ===
function renderNextCards() {
  if (isLoading) return;

  const container = document.querySelector('#search-list');
  const spinner = container.querySelector('#spinner');
  if (!spinner) return;

  const nextCards = currentFilteredCards.slice(loadedCount, loadedCount + cardsPerLoad);
  isLoading = true;

  setTimeout(() => {
    if (nextCards.length === 0 && loadedCount === 0) {
      container.innerHTML = '<p style="padding:20px; text-align:center;">검색 결과가 없습니다.</p>';
      return;
    }

    nextCards.forEach(card => {
      const cardHtml = createCardHtml(card);
      spinner.insertAdjacentHTML('beforebegin', cardHtml);
    });

    loadedCount += nextCards.length;
    isLoading = false;

    if (loadedCount >= currentFilteredCards.length) {
      spinner.remove();
      listObserver.unobserve(spinner);
    } else {
      spinner.style.display = 'flex';

      if (!window._observerInitialized) {
        listObserver.observe(spinner);
        window._observerInitialized = true;
      }
    }
  }, 500);
}

// === 정렬 함수 ===
function sortCardsByOption(optionText = "예약가 높은순") {
  currentFilteredCards.sort((a, b) => {
    const getPrice = (card) => {
      if (card.soldOut) return null;
      const priceStr = card.discountPrice || card.originalPrice;
      if (!priceStr) return null;
      return parseInt(priceStr.replace(/,/g, ''));
    };

    const priceA = getPrice(a);
    const priceB = getPrice(b);

    if (optionText === "예약가 낮은순") {
      if (priceA === null) return 1;
      if (priceB === null) return -1;
      return priceA - priceB;
    }

    if (optionText === "예약가 높은순") {
      if (priceA === null) return 1;
      if (priceB === null) return -1;
      return priceB - priceA;
    }

    if (optionText === "찜 많은 순" || optionText === "등록 많은 순") {
      const ratingA = parseFloat(a.rating);
      const ratingB = parseFloat(b.rating);
      return ratingB - ratingA;
    }

    return 0;
  });
}

// === 하트 버튼 토글 이벤트 ===
$(document).on('click', '.heart-btn', function (e) {
  e.preventDefault();
  e.stopPropagation();
  const heartImg = $(this).find('.heart-img');
  heartImg.toggleClass('heart-active');
  heartImg.attr('src', heartImg.hasClass('heart-active') ? "image/heart_sel.webp" : "image/heart_non.webp");
});

// === 카드 클릭 시 상세페이지 이동 ===
$(document).on('click', '.card', function () {
  const title = $(this).find('.card-title').text().trim();
  const image = $(this).find('.card-img').attr('src');
  const location = $(this).find('.location-text').text().trim();
  const originalPrice = $(this).find('.original-price').text().trim();
  const discountPrice = $(this).find('.discount-price').text().trim();
  const url = `detailpage.html?title=${encodeURIComponent(title)}&image=${encodeURIComponent(image)}&location=${encodeURIComponent(location)}&originalPrice=${encodeURIComponent(originalPrice)}&discountPrice=${encodeURIComponent(discountPrice)}`;
  window.location.href = url;
});

// === 페이지 로드 시 검색어 읽고 렌더링 시작 ===
$(function () {
  const params = new URLSearchParams(window.location.search);
  const query = params.get('query') || '';

  if (!query) {
    document.querySelector('#search-list').innerHTML =
      '<p style="padding:20px; text-align:center;">검색어를 입력해주세요.</p>';
    return;
  }

  renderSearchResults(query);
});

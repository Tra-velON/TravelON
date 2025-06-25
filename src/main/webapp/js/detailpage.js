const reviewData = [
    {
        user: "eljsdfiu...",
        date: "2025.06.01",
        rating: 4.5,
        text: "방이 깨끗하고 넓어요! 직원 응대도 친절하고 훌륭해요! 다음에도 이 게스트 하우스 오고싶네요!",
        image: "image/client01.png"
    },
    {
        user: "beautyand...",
        date: "2025.05.12",
        rating: 5,
        text: "우와! 친구들과 파티를 너무 재밌게 즐겼어요. 1박 2일로 예약했는데, 겨울에 또 올게요~",
        image: "image/client02.png"
    },
    {
        user: "chocolove...",
        date: "2025.06.01",
        rating: 4,
        text: "조식도 너무 맛있고 위치도 좋아요. 강추!",
        image: "image/client03.png"
    },
    {
        user: "eljsdfiu...",
        date: "2025.06.01",
        rating: 4.5,
        text: "방이 깨끗하고 넓어요! 직원 응대도 친절하고 훌륭해요! 다음에도 이 게스트 하우스 오고싶네요!",
        image: "image/client01.png"
    },
    {
        user: "beautyand...",
        date: "2025.05.12",
        rating: 5,
        text: "우와! 친구들과 파티를 너무 재밌게 즐겼어요. 1박 2일로 예약했는데, 겨울에 또 올게요~",
        image: "image/client02.png"
    },
    {
        user: "chocolove...",
        date: "2025.06.01",
        rating: 4,
        text: "조식도 너무 맛있고 위치도 좋아요. 강추!",
        image: "image/client03.png"
    },
];
// 별점 렌더 함수
function renderStars(rating) {
    let html = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            html += '<span class="star full">★</span>';
        } else if (i - rating < 1) {
            html += '<span class="star half">★</span>';
        } else {
            html += '<span class="star empty">☆</span>';
        }
    }
    return html;
}

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);

    const title = params.get("title");
    const image = params.get("image");
    const locationText = params.get("location");
    const originalPrice = params.get("originalPrice");
    const discountPrice = params.get("discountPrice");

    const titleEl = document.getElementById("detail-title");
    const imageEl = document.getElementById("detail-image");
    const locationEl = document.getElementById("detail-location");


    if (titleEl && title) {
        titleEl.textContent = decodeURIComponent(title);
    }

    if (imageEl && image) {
        imageEl.src = decodeURIComponent(image);
    }

    if (locationEl && locationText) {
        const decodedLocation = decodeURIComponent(locationText);
        const textNodes = Array.from(locationEl.childNodes).filter(n => n.nodeType === Node.TEXT_NODE);
        textNodes.forEach(node => locationEl.removeChild(node));
        locationEl.appendChild(document.createTextNode(decodedLocation));
    }

    const baseOriginal = parseInt(originalPrice?.replace(/[^0-9]/g, "") || "0", 10);
    const baseDiscount = parseInt(discountPrice?.replace(/[^0-9]/g, "") || "0", 10);

    const formatPrice = (num) => num.toLocaleString("ko-KR");

    document.querySelectorAll(".room-category").forEach((categoryEl, categoryIndex) => {
        const priceGap = categoryIndex * 10000;

        categoryEl.querySelectorAll(".room-card").forEach(card => {
            const originalEl = card.querySelector(".original-price");
            const discountEl = card.querySelector(".discount-price");

            if (originalEl && discountEl) {
                const finalOriginal = baseOriginal + priceGap;
                const finalDiscount = baseDiscount + priceGap;

                originalEl.textContent = formatPrice(finalOriginal);
                discountEl.textContent = formatPrice(finalDiscount);
            }
        });
    });

    $(document).ready(function () {
        $('.image-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            infinite: false,
        });
    });

    const container = $('.review-slider');
    container.empty();

    reviewData.forEach(review => {
        const cardHtml = `
        <div class="review-card">
          <div class="review-user">${review.user}</div>
          <div class="review-date">${review.date}</div>
          <div class="review-stars">${renderStars(review.rating)}</div>
          <div class="review-text">${review.text}</div>
          <img class="review-thumb" src="${review.image}" alt="리뷰 썸네일" />
        </div>
      `;
        container.append(cardHtml);
    });

    container.slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: false,
        arrows: true,
        dots: false,
    });


    $(document).on('click', '.heart-btn', function (e) {
        const heartImg = $(this).find('.heart-img');
        heartImg.toggleClass('heart-active');

        const isActive = heartImg.hasClass('heart-active');
        heartImg.attr('src', isActive ? "image/heart_sel.webp" : "image/heart_non.webp");
    });
});


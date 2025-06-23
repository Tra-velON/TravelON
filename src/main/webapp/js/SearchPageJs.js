
$(function(){
    $('.category-btn').click(function(){
    $('.category-btn').removeClass('active');
    $(this).addClass('active');
    });

   $('.responsive').slick({
        dots: true,
        infinite: false,
        arrows:true,
        speed: 300,
        cssEase: 'linear',
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    })
});

document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".sort-container");
    const toggle = container.querySelector(".sort-toggle");
    const sortOptions = container.querySelectorAll(".sort-option");
    const btnApply = container.querySelector(".btn-apply");
    const sortImg = document.querySelector('.sort-image');

    toggle.addEventListener("click", function (e) {
        sortImg.src="image/sort_sel.webp";
        container.classList.toggle("active");
    });

    document.addEventListener("click", function (e) {
        if (!container.contains(e.target)) {
            container.classList.remove("active");
            sortImg.src="image/sort_non.webp";
        }
    });

    sortOptions.forEach(function (option) {
        option.addEventListener("click", function () {
            sortOptions.forEach(function (opt) {
            opt.classList.remove("selected");
            });
            this.classList.add("selected");
        });
    });

    btnApply.addEventListener("click", function () {
        const selectedOption = container.querySelector(".sort-option.selected");
        if (selectedOption) {
            alert("Selected option:"+ selectedOption.textContent);
        } else {
            alert("No option selected");
        }
        container.classList.remove("active");
        sortImg.src="image/sort_non.webp";
    });
});
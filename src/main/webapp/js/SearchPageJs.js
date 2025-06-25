$(function () {
    $('.category-btn').click(function () {
        $('.category-btn').removeClass('active');
        $(this).addClass('active');

        const selectedCategory = $(this).text().trim();

        if (selectedCategory === "전체") {
            $('#search-list').fadeOut(200, function () {
                $('#search-total').fadeIn(200);
            });
        } else {
            $('#search-total').fadeOut(200, function () {
                $('#search-list').fadeIn(200);
                renderCardListViewByCategory(selectedCategory);
            });
        }
    });

    $('#search-total').show();

    renderCards(); 

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
        if (selectedOption) {
            alert("Selected option: " + selectedOption.textContent);
        }
        container.classList.remove("active");
        sortImg.src = "image/sort_non.webp";
    });

    $(document).on('click', '.heart-btn', function (e) {
        e.preventDefault();
        e.stopPropagation();

        const heartImg = $(this).find('.heart-img');
        const isActive = heartImg.hasClass('heart-active');

        if (isActive) {
            heartImg.removeClass('heart-active');
            heartImg.attr('src', "image/heart_non.webp");
        } else {
            heartImg.addClass('heart-active');
            heartImg.attr('src', "image/heart_sel.webp");
        }
    });

    $(document).on('click', '.card', function () {
        const title = $(this).find('.card-title').text().trim();
        const url = `detail.html?title=${encodeURIComponent(title)}`;
        window.location.href = url;
    });
});


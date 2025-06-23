
$(function(){
    $("#header").load("header.html");
    $("#footer").load("footer.html");
    
    $('.category-btn').click(function(){
    $('.category-btn').removeClass('active');
    $(this).addClass('active');
    });

    const sortOptions = document.querySelectorAll('.sort-option');
    sortOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            sortOptions.forEach(o => o.classList.remove('selected'));
            opt.classList.add('selected');
        });
    });

    $('.sort-option').on('click', function(){
        $('.sort-option').removeClass('selected');
        $(this).addClass('selected');
    })

    const dropdownToggleButton = $('[data-bs-toggle="dropdown"][data-bs-auto-close="false"]');

    dropdownToggleButton.on('show.bs.dropdown', function () {
        $(this).find('img').attr('src', 'image/sort_sel.webp');
    });

    dropdownToggleButton.on('hide.bs.dropdown', function () {
        $(this).find('img').attr('src', 'image/sort_non.webp');
    });

    $('.btn-apply').on('click', function () {
        const dropdownToggle = $('[data-bs-toggle="dropdown"][data-bs-auto-close="false"]')[0];
        const dropdownInstance = bootstrap.Dropdown.getInstance(dropdownToggle) || new bootstrap.Dropdown(dropdownToggle);
        dropdownInstance.hide();
        alert("정렬 완료");
    });

    $(document).ready(function(){
    $('.guesthouse-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        responsive: [
        {
            breakpoint: 768,
            settings: { slidesToShow: 1 }
        },
        {
            breakpoint: 992,
            settings: { slidesToShow: 2 }
        }
        ]
    });
    });
});
(function ($) {
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        pagination: '.swiper-pagination',
        autoplay: 5000,
        paginationClickable: true
    });
    $('#hamburger').click(function(){
        $('#hamburger, .menu').toggleClass("open");
    });
    $("#menu").on("click", "a", function (event) {
        var id = $(this).attr('href'),
            top = $(id).length ? $(id).offset().top : 0;
        $('body').animate({scrollTop: top}, 300);
    });
    $('#scroll-to-top').click( function () {
        $('body').animate({scrollTop: 0}, 300);
    });
    $(window).scroll(function(){
        if($(window).scrollTop() > 100) {
            $('#scroll-to-top').fadeIn();
        }
        else {
            $('#scroll-to-top').fadeOut();
        }
    });
}(jQuery));

 


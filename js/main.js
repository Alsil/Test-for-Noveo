(function ($) {
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        pagination: '.swiper-pagination',
        autoplay: 5000,
        paginationClickable: true
    })
}(jQuery));
(function ($){
    $('#hamburger').click(function(){
        $('#hamburger, .menu').toggleClass("open");
    })
}(jQuery));
 


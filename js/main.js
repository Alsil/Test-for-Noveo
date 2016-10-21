(function ($) {
    var $scrolTopBtn = $('#scroll-to-top');
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        pagination: '.swiper-pagination',
        autoplay: 5000,
        paginationClickable: true
    });
    $('#hamburger').click(function(){
        $('#hamburger, #menu').toggleClass("open");
    });
    $("#menu").on("click", "a", function (event) {
        var id = $(this).attr('href'),
            top = $(id).length ? $(id).offset().top : 0;
        $('body').animate({scrollTop: top}, 300);
    });
    $scrolTopBtn.click( function () {
        $('body').animate({scrollTop: 0}, 300, function() {
            $scrolTopBtn.hide()
        });

    });
    $(window).scroll(function(){
        $(window).scrollTop() > 100 ? $scrolTopBtn.stop().fadeIn() : $scrolTopBtn.stop().fadeOut()});
}(jQuery));

 


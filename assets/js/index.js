$(function () {
    // slick slider - welcome
    $('.slideshow').slick({
        infinite: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        speed: 1000,
        pauseOnHover: false
    })

    //type it - welcome
    $('#typing').typeIt({
        strings: [
            '#consistency',
            '#flexibility',
            '#scalability',
        ],
        speed: 100,
        autoStart: true,
        breakLines: false,
    });
});

$(function () {
    //faq-accodion
    $('.faq-desc').eq(0).show()
    $('.faq-title').click(function () {
        $(this).next().stop().slideDown()
        $(this).parent().siblings().children('.faq-desc').stop().
            slideUp()
        $(this).parent().addClass('active')
        $(this).parent().siblings().removeClass('active');
    })
});
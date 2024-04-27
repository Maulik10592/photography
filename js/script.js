jQuery(document).ready(function(){
    // header js start //
    jQuery(window).scroll(function(){
        if (jQuery(window).scrollTop() >= 150) {
            jQuery('.navbar').addClass('fixed-header');
        }
        else {
            jQuery('.navbar').removeClass('fixed-header');
        }
    });  
    jQuery(function(){
        jQuery('.navbar a').click(function () {
            jQuery('.navbar a').removeClass('active');
            jQuery(this).addClass('active');
         });
     });  
    // header js end //

    // animation js start //
    AOS.init({
        duration: 1200,
    });
    // animation js end //

    // gallery js start //
    $('.galleryCarousel').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        speed: 300,
        infinite: true,
        autoplaySpeed: 2000,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    // gallery js end //

    // testimonials js start //
    $('#testimonialsSliderBox').carousel({
        interval: 3000,
    });
    // testimonials js end //
});

// work js start //
const lightbox = GLightbox({
    touchNavigation: true,
    loop: true,
    width: "90vw",
    height: "90vh"
});
// work js end //
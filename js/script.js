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
    // header js end //

    // gallery js start //
    $('.galleryCarousel').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        speed: 300,
        infinite: true,
        autoplaySpeed: 2000,
        autoplay: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    // gallery js end //
});

// work js start //
const lightbox = GLightbox({
    touchNavigation: true,
    loop: true,
    width: "90vw",
    height: "90vh"
});
// work js end //
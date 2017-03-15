//jQuery to collapse the navbar on scroll
$(window).scroll(function() {

    if($(".navbar-collapse").hasClass("in")) {
       $(".navbar-collapse").collapse("toggle"); 
    }

    /*if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }*/
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//jQuery for sliders initializatiom
$(function() {
    $(".rslides-default").responsiveSlides({
        auto: true,                    
        speed: 500,
        timeout: 4000,
        namespace: "rslides-default"
    });
});

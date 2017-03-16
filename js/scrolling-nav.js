//jQuery check cookie law
$(function() {
    if(getCookie("cookie-law") == "") {
        $(".cookie-law").collapse("toggle");
    }
});

//jQuery to collapse on scroll
$(window).scroll(function() {

    if($(".cookie-law").hasClass("in")) {
        setCookie("cookie-law","1",10000);
        $(".cookie-law").collapse("toggle");
    }

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


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

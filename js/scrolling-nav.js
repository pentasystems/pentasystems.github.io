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

//sendmail
jQuery(function($)
{
    $("#contact_form").submit(function()
    {
        var email = $("#email").val(); // get email field value
        var msg = $("#msg").val(); // get message field value
        $.ajax(
        {
            type: "POST",
            url: "https://mandrillapp.com/api/1.0/messages/send.json",
            data: {
                'key': 'EHYOuiwRJFtqrvFG-n8Rcw',
                'message': {
                    'from_email': 'scale@pentasystems.it',
                    'from_name': email,
                    'headers': {
                        'Reply-To': email
                    },
                    'subject': 'Richiesta contatto | scale.pentasystems.it',
                    'text': msg,
                    'to': [
                    {
                        'email': 'manuele@pentasystems.it',
                        'name': 'Manuele Perlati',
                        'type': 'to'
                    }]
                }
            }
        })
        .done(function(response) {
            alert('Il tuo messaggio è stato inoltrato, grazie!'); // show success message
            $("#email").val(''); // reset field after successful submission
            $("#msg").val(''); // reset field after successful submission
        })
        .fail(function(response) {
            alert('C\'é stato un problema durante l\'inoltro. Riprova più tardi o scrivi una mail a info@pentasystems.it');
        });
        return false; // prevent page refresh
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

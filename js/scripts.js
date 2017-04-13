// Empty JS for your own code to be here
$(document).ready(function () {

    $(".fancybox").fancybox();

    if ($(window).width() < 992) {
        $('img.kits-passo-4').addClass('img-responsive');
    }

    if ($(window).width() < 768) {
        $('footer div').removeClass('collapse navbar-collapse');
        $('footer img').removeClass('hvr-wobble-vertical');
        $('footer a').removeClass('hvr-overline-from-center');
    }

    if ($(window).width() < 681) {
        $('img.kits-passo-4').addClass('img-responsive');
    }

    $(window).resize(function () {
        // Adicionar sempre que a tela for redimensionada
        menu_fixo();
    });
    
    menu_fixo();

});

function menu_fixo() {
    $('nav').affix({
        offset: {
            top: $('#navbar').offset().top
        }
    });
}

/**
 * Hover - Inicio
 */
var effects = document.querySelectorAll('.effects')[0];

!function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + '://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js, fjs);
    }
}(document, 'script', 'twitter-wjs');

(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-11991680-4', 'ianlunn.github.io');
ga('send', 'pageview');
/**
 * Hover - FIM
 */
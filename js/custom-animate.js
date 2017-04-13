$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function () {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

$(document).ready(function () {

    $('.nome-logo img').animateCss('bounceInRight');
    $('img.panela-principal').animateCss('zoomIn');

    $('.nome-logo img').animateCss('bounceInRight');
    $('img.img-kit').animateCss('bounceInLeft');
    $('img.donatela-home').animateCss('bounceInRight');
    $('img.panelas-right').animateCss('slideInRight');
    $('img.panelas-left').animateCss('slideInLeft');
    $('img.termos-caixa').animateCss('zoomIn');
    
    $('.post-top').addClass("some").viewportChecker({
        classToAdd: 'visible animated fadeInDown',
        offset: 100
    });
    
    $('.post-right-big').addClass("some").viewportChecker({
        classToAdd: 'visible animated fadeInRightBig',
        offset: 100
    });
    
    $('.post-down').addClass("some").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 100
    });

    $('.post-right').addClass("some").viewportChecker({
        classToAdd: 'visible animated fadeInRight', 
        offset: 100
    });

    $('.post-left').addClass("some").viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 100
    });
    
    $('.post-back').addClass("some").viewportChecker({
        classToAdd: 'visible animated zoomIn',
        offset: 100
    });
    
    $('.post-rotate-down-right').addClass("some").viewportChecker({
        classToAdd: 'visible animated rotateInDownRight',
        offset: 100
    });
    
    $('.rodape').addClass("some").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 5
    });
});
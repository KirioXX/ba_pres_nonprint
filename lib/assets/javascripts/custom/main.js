/**
 * Created by Ben on 12.08.2015.
 */
var toogleSearchBar = function(){
    $('#searchButton').on('click',function(){
        var element = $('#searchbar');
        if(element.hasClass('active')){
            // the animation starts
            element.toggleClass('hinge animated');
            // do something when animation ends
            element.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){
                // trick to execute the animation again
                $(e.target).removeClass('hinge animated active');
            });
        }else {
            element.addClass('active');
            // the animation starts
            element.toggleClass('bounceInDown animated');
            // do something when animation ends
            element.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){
                // trick to execute the animation again
                $(e.target).removeClass('bounceInDown animated');
            });
        }
    });
};

var startLoder = function(){
    var container = document.getElementById('loader-container');

    TweenMax.set(['svg'], {
        position: 'absolute',
        top: '50%',
        left: '50%',
        xPercent: -50,
        yPercent: -50
    })

    TweenMax.set([container], {
        position: 'absolute',
        top: '50%',
        left: '50%',
        xPercent: -50,
        yPercent: -50
    })

    var tl = new TimelineMax({
        repeat: -1
    });

    tl.set('#outline', {
        drawSVG: '0% 0%'
    })
        .to('#outline', 0.2, {
            drawSVG: '11% 25%',
            ease: Linear.easeNone
        })
        .to('#outline', 0.5, {
            drawSVG: '35% 70%',
            ease: Linear.easeNone
        })
        .to('#outline', 0.9, {
            drawSVG: '99% 100%',
            ease: Linear.easeNone
        })
};

var openLoginForm = function(){
    $('#login-form').on('click',function(){
        $('.overlay').fadeIn('slow',function(){
            $(this).css('display','flex');
            // the animation starts
            $('.overlay-inner').toggleClass('bounceIn animated active');
            // do something when animation ends
            $('.overlay-inner').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){
                // trick to execute the animation again
                $(e.target).removeClass('bounceIn animated');
            });
        });
    });
};

var closeLoginForm = function(){
    $('#closeButton').on('click',function(){
        $('.overlay').fadeOut();
        $('.overlay-inner').removeClass('active');
    });
};

var addToCart = function(){
    $('#addToCart-button').on('click',function(){
        var product_id = $(this).data('prod');
        $(this).addClass('filled').animate({width:10%}).addClass('clicked');
    })
};

$(document).ready(function(){
    toogleSearchBar();
    startLoder();
    openLoginForm();
    closeLoginForm();
    addToCart()
});
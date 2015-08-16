/**
 * Created by Ben on 12.08.2015.
 */
var price = 0.00;
var count = 0;

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

var startLoder = function(element){
    var container = $('.loader-container');
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

var loginAction = function(evt){
    var email = document.forms["loginForm"]["femail"].value;
    action= false;
    if (email == null || email == "") {
        $('.email-group').addClass('has-error');
        action = true;
    }else{
        $('.email-group').removeClass('has-error').addClass('has-success');
    }
    var pw = document.forms["loginForm"]["fpassword"].value;
    if (pw == null || pw == "") {
        $('.pw-group').addClass('has-error');
        action = true;
    }else{
        $('.pw-group').removeClass('has-error').addClass('has-success');
    }
    if(action){
        errorAction();
    }else{
        $('.overlay').fadeOut();
        $('.overlay-inner').removeClass('active');
    }
};

var errorAction = function(){
    $('.overlay-inner').toggleClass('shake animated');
    // do something when animation ends
    $('.overlay-inner').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){
        // trick to execute the animation again
        $(e.target).removeClass('shake animated');
    });
};

var addToCart = function(button,product_id, type){
    if(type == 'min'){
        $(button).addClass('filled clicked-min').parent().find('svg').show().animate({
            scrollTop: posY,
        },5000);
    }else{
        $(button).addClass('filled clicked').parent().find('svg').show().animate({
            top: '-1070%',
            left: '90%',
        },5000, function(){
            price += 10.00;
            $('.cart-summery .price').fadeOut().find('span').html(price.toFixed(2));
            count++;
            $('.cart-summery .count').fadeOut().html(count+' Produkte');
            $('.cart-summery .price,.cart-summery .count').fadeIn();
            $(this).fadeOut(function(){
                $(button).removeClass('filled clicked');
            });
        });
    }

};

$(document).ready(function(){
    toogleSearchBar();
    startLoder();
    openLoginForm();
    closeLoginForm();
});
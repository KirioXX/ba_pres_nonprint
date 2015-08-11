/**
 * Created by Ben on 10.08.2015.
 * View JS
 */
var toogleSearchBar = function(){  $('#searchButton').on('click',function(){
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

var changeProduct = function(){
    $('.dropdown-menu a').on('click',function(){
        var url = $(this).data('url');
        $.ajax({
            url: url,
            }
        ).success(function(result){
            $('h1, #main-price, #shortdesc, #description, #main-img').animate({opacity:0}, 2000, function(){
                $('#loder-container').fadeIn();
                $('h1').html(result.name);
                var price = parseInt(result.price);
                $('#main-price').html(price.toFixed(2));
                $('#shortdesc').html(result.shortdesc);
                $('#description').html(result.description);
                $('#main-img').attr('src',result.mainImage_url);
            }).delay(3000).animate({opacity: 1},2000, function(){
                $('#loder-container').fadeOut();
            });
        })
    })
}

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
}

$(document).ready(function(){
    toogleSearchBar();
    changeProduct();
    startLoder();
});

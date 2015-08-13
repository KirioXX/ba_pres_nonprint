/**
 * Created by Ben on 12.08.2015.
 */
function isScrolledIntoView(elem)
{
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

var startView = function(){
    $('.thumb-element').each(function(){
        if($(this).hasClass('disabled')){
            if(isScrolledIntoView(this)){
                // the animation starts
                $(this).toggleClass('fadeInUp animated disabled');
                // do something when animation ends
                $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){
                    // trick to execute the animation again
                    $(e.target).removeClass('fadeInUp animated');
                });
            }
        }
    });
}

var scrollFunction = function(){
    $('.thumb-element.disabled').each(function(){
        if(isScrolledIntoView(this)){
            // the animation starts
            $(this).toggleClass('fadeInUp animated disabled');
            // do something when animation ends
            $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){
                // trick to execute the animation again
                $(e.target).removeClass('fadeInUp animated');
            });
        }
    });
};

var getProduct = function(url){
    $('#content-main').fadeOut(2000, function(){
        $('.main-loader').fadeIn();
        $.ajax({
            url: url,
            success: function(result){
                $('#content-main').html(result)
            }
        });
    }).delay(3000).fadeIn(2000, function(){
        $('.main-loader').fadeOut();
    });;
}

$(document).ready(function(){
   startView();
    scrollFunction();
});

$(window).scroll(function(){
    scrollFunction();
})
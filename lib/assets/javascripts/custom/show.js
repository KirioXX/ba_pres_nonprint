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
}

$(document).ready(function(){
   startView();
});

$(window).scroll(function(){
    scrollFunction();
})
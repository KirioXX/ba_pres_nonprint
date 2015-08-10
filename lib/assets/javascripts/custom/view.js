/**
 * Created by Ben on 10.08.2015.
 */
var toogleSearchBar = function(){  $('#searchButton').on('click',function(){
    var element = $('#searchbar');
    console.log('test');
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

}

$(document).ready(function(){
    toogleSearchBar();
    changeProduct();
});

/**
 * Created by Ben on 10.08.2015.
 * View JS
 */
var changeProduct = function(){
    $('.dropdown-menu a').on('click',function(){
        var url = $(this).data('url');
        $.ajax({
            url: url,
            }
        ).success(function(result){
            $('h1, #main-price, #shortdesc, #description, #main-img').animate({opacity:0}, 2000, function(){
                $('#model-container').html(result.hero);
                $('#loder-container').fadeIn();
                $('h1').html(result.name);
                var price = parseInt(result.price);
                $('#main-price').html(price.toFixed(2));
                $('#shortdesc').html(result.shortdesc);
                $('#description').html(result.description);
                $('#addToCart-button').data('prod', result.id)
                $('#main-img').attr('src',result.mainImage_url);
            }).delay(3000).animate({opacity: 1},2000, function(){
                $('#loder-container').fadeOut();
            });
        })
    })
}


$(document).ready(function(){
    changeProduct();
});

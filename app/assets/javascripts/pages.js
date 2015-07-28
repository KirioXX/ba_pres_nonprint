var loadIfram = $('.reload-button').click(function(){
    var elem = $(this).parent();
    var url = elem.attr('data-url');
    elem.find('iframe').attr('src',url);
})
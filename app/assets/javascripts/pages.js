var loadIfram = $('.reload-button').click(function(){
    var elem = $(this).parent();
    console.log(elem);
    var url = elem.data('url');
    elem.find('iframe').attr('src',url);
});

$(document).ready(function(){
    loadIfram;
});
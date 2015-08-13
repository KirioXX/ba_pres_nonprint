var loadIfram = function(){
    $('.reload-button').click(function(){
        var elem = $(this).parent();
        var url = elem.data('url');
        elem.find('iframe').attr('src',url);
    });
}

$(document).ready(function(){
    loadIfram();
});
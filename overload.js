$(document).ready(function() { 
 $('span.flex_url').replaceWith(function() {
    var url = $.trim($(this).text());
    return '<a href="' + url + '" class="flex_url" target="_blank">' + url + '</a>';
});
$('div.float-caption-algorithm').replaceWith(function() {
    var text = $.trim($(this).text());
    return text.replace('Algoritmo','Listato');
});

});
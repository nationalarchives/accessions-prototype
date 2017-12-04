$(document).ready(function(){
    // $('h3').insertBefore('td:eq(4)');
    /*$('h1').insertAfter('a');
    $('h1').html('Accessions to Repositories');*/
    // $('a:eq(23)').html('<a class="ghost-button" href="#">Choose a different year</a>');

    //$('td:eq(4)').before('<h1>Accessions to Repositories</h1>');

    var removeSelectedElement = function (selector) {
        return selector.remove();
    };

    var removeElementClass = function(selector, selectorClass){
        return selector.removeClass(selectorClass);
    };



    //calling required function
    removeSelectedElement($('td:eq(5)'));
    removeSelectedElement($('td:eq(5)'));
    removeSelectedElement($('td:eq(3)'));
    removeSelectedElement($('td:eq(4)'));

    removeElementClass($('h1'), 'parchment');

    $('.tabbody table tbody > tr')


});
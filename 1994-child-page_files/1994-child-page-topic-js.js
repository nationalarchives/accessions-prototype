$(document).ready(function(){
    $('td:eq(7)').remove();
    //$('a:eq(23)').html('<a class="ghost-button" href="#">Choose a different year</a>');

    //$('#mydiv > a').hide();
    var $chooseADifferentYear = $('#content table > a');
    $chooseADifferentYear.addClass('ghost-button');

    var removeElementClass = function(selector, selectorClass){
        return selector.removeClass(selectorClass);
    };

    var removeSelectedElement = function (selector) {
        return selector.remove();
    };

    var replaceAlphabetHeaders = function(){
        $.each( $('.index > a'), function(){
            $(this).replaceWith('<h2>' + $(this).attr('id') + '</h2>');
        });
    };

    removeElementClass($('h1'), 'parchment');

    removeSelectedElement($('td:eq(5)'));
    removeSelectedElement($('td:eq(5)'));
    removeSelectedElement($('td:eq(3)'));
    removeSelectedElement($('td:eq(4)'));

    replaceAlphabetHeaders();



});


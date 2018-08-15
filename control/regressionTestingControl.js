function add_one_test_result() {
    var d = new Date().toISOString();
    $('#test_result').prepend('<i class="angle right icon"></i> ' + d +  '<br>');
}


$(function() {

    var toolbar_width = $('.buttons').width() / 4 * 11;
    var actual_padding = ( $( window ).width() - toolbar_width ) / 2 - 5;

    $('#dashboard').css('padding-left', actual_padding + 'px');
    $('#dashboard').css('padding-right', actual_padding + 'px');

    $('.ui.accordion').accordion({ exclusive: false });

    $('.title').on('click', function(){
        $('.title').removeClass('selected');
        $(this).toggleClass('selected');
        $(this).find('.icon').toggleClass('open');
    });
});

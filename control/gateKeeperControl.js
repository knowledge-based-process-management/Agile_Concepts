function add_one_gate() {
    var numbers = $('.number');
    var num_of_gate = parseInt($('#gate_card').find(numbers).html());
    $('#gate_card').find(numbers).html(num_of_gate + 1);
}

$(function() {

    $('.ui.dropdown')
      .dropdown({
        maxSelections: 10
      })
    ;

    $('.coupled.modal')
      .modal({
        allowMultiple: false
      })
    ;
    // attach events to buttons
    $('#deploy_modal')
      .modal('attach events', '#add_gate_modal .right.button', 'show')
    ;

    $('#add_gate_modal')
          .modal('attach events', '#add_gate_modal .cancel.button', 'close')
        ;

    $('.button')
      .popup({
        inline     : true,
        hoverable  : true,
        position   : 'left center',
        delay: {
          show: 100,
          hide: 100
        },
      })
    ;

});
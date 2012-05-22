$(function() {
  $( "#slider" ).slider({
    value:600,
    min: 500,
    max: 1500,
    step: 10,
    slide: function( event, ui ) {
      $( "#amount" ).val( ui.value );
    }
  });
  $( "#amount" ).val( $( "#slider" ).slider( "value" ) );
});
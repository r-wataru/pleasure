$(function() {
  $('span.f').draggable({
    containment: 'div.d' ,
    scroll: false,
     axis: "x"
  });
});

$(function(){
  $("#Area1").resizable({
    containment: '#AllArea'
  });
  $("#Area2").resizable({
    containment: 'document'
  });
});
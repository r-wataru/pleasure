$(function(){
  $(".D-1").resizable({
    maxWidth: 582,
    resize: function(event, ui) {
      var w1 = $(".D-1").css("width");
      var w4 = w1.replace('px','');
      var w7 = eval(w4);  //D-1の数値
      var w10 = 600 - w7
      var w11 = w10 / 2
      $("#debug").empty().prepend(w10);
      $(".D-2").width(w11);
      $(".D-3").width(w11);
    }
  });
  $(".D-2").resizable({
    maxWidth: 582,
    resize: function(event, ui) {
      var w2 = $(".D-2").css("width");
      var w5 = w2.replace('px','');
      var w8 = eval(w5);  //D-2の数値
      var w10 = 600 - w8
      var w11 = w10 / 2
      $("#debug").empty().prepend(w10);
      $(".D-1").width(w11);
      $(".D-3").width(w11);
    }
  });
  $(".D-3").resizable({
    maxWidth: 582,
    maxHeight: 382,
    resize: function(event, ui) {
      var w3 = $(".D-3").css("width");
      var h3 = $(".D-3").css("height");
      var w6 = w3.replace('px','');
      var h6 = h3.replace('px','');
      var w9 = eval(w6);  //D-3の幅数値
      var h9 = eval(h6);  //D-3の高さ数値
      var w10 = 600 - w9
      var h10 = 400 - h9
      var w11 = w10 / 2
      $(".D-1").width(w11);
      $(".D-2").width(w11);
      $(".D-1C").height(h10).css('float','right');
    }
  });
})



$(function(){
  $(".H-1").resizable({
    handles: 'all',
    resize: function(event, ui) {
      $(".H-1").css('z-index','99999');
    }
  }).draggable({
    containment: '.A-1',
    create: function(event, ui) {
      $(".H-1").css('z-index','99999');
      $("span.remove").click(function (){
        $(".H-1").remove();
      })
    }
  });
  $(".H-2").resizable({
    handles: 'all',
    resize: function(event, ui) {
      $(".H-2").css('z-index','99998');
    }
  }).draggable({
    containment: '.A-1',
    create: function(event, ui) {
      $(".H-2").css('z-index','99998');
    }
  });
  $(".H-3").resizable({
    handles: 'all',
    resize: function(event, ui) {
      $(".H-3").css('z-index','99997');
    }
  }).draggable({
    containment: '.A-1',
    create: function(event, ui) {
      $(".H-3").css('z-index','99997');
    }
  });
  $(".H-4").resizable({
    handles: 'all',
    resize: function(event, ui) {
      $(".H-4").css('z-index','99996');
    }
  }).draggable({
    containment: '.A-1',
    create: function(event, ui) {
      $(".H-4").css('z-index','99996');
    }
  });
  $(".H-5").resizable({
    handles: 'all',
    resize: function(event, ui) {
      $(".H-5").css('z-index','99995');
    }
  }).draggable({
    containment: '.A-1',
    create: function(event, ui) {
      $(".H-5").css('z-index','99995');
    }
  });
  $(".H-6").resizable({
    handles: 'all',
    resize: function(event, ui) {
      $(".H-6").css('z-index','99995');
    }
  }).draggable({
    containment: '.A-1',
    create: function(event, ui) {
      $(".H-6").css('z-index','99994');
    }
  });
});


$(function(){
  $(".Z-SA").resizable({
    maxWidth: 291,
    handles: 'e',
    resize: function(event, ui) {
      var w1 = $(".Z-SA").css("width");
      var w4 = w1.replace('px','');
      var w7 = eval(w4);  //Z-SAの数値
      var w10 = 300 - w7
      var w11 = w10 / 2
      var w12 = w7 * 2
      $(".Z-SB").width(w11);
      $(".Z-SC").width(w11);
      $(".Z-AB").width(w10);
      $(".Z-AC").width(w10);
      $(".Z-AA").width(w12);
    }
  });
  $(".Z-SB").resizable({
    maxWidth: 291,
    handles: 'e',
    resize: function(event, ui) {
      var w2 = $(".Z-SB").css("width");
      var w5 = w2.replace('px','');
      var w8 = eval(w5);  //Z-SBの数値
      var w10 = 300 - w8
      var w11 = w10 / 2
      var w12 = w8 * 2
      $("#debug").empty().prepend(w10);
      $(".Z-SA").width(w11);
      $(".Z-SC").width(w11);
      $(".Z-AA").width(w10);
      $(".Z-AC").width(w10);
      $(".Z-AB").width(w12);
    }
  });
  $(".Z-SC").resizable({
    maxWidth: 291,
    handles: 'e',
    resize: function(event, ui) {
      var w3 = $(".Z-SC").css("width");
      var w6 = w3.replace('px','');
      var w9 = eval(w6);  //Z-SCの幅数値
      var w10 = 300 - w9
      var w11 = w10 / 2
      var w12 = w9 * 2
      $(".Z-SA").width(w11);
      $(".Z-SB").width(w11);
      $(".Z-AC").width(w10);
      $(".Z-AA").width(w10);
      $(".Z-AB").width(w12);
    }
  });
})
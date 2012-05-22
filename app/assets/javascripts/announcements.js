$(function(){
  $(".point_1").resizable({
    handles: "all",
    maxWidth: 200,
    maxHeight: 200,
    resize: function(event, ui){
      $("point_1").css('z-index', '99999');
      $("point_1").css("margin", "0");
      var P1W = $(".point_1").css("width");
      var P1H = $(".point_1").css("height");
      $(".point_1_width").empty().prepend(P1W);
      $(".point_1_height").empty().prepend(P1H);
    }
    }).draggable({
      containment: "#wrong_picture",
      drag: function(event, ui){
        $(".point_1").css("z-index", "99999");
        $(".point_1").css("margin", "0");
        var span = $("span.out_put_point_1");
        var P1 = $(".point_1").position();
        span.html( "X: " + Math.floor( P1.left - 60 ) + ", Y: " + Math.floor( P1.top - 282 ) );
      }
    })
    $(".point_2").resizable({
    handles: "all",
    maxWidth: 200,
    maxHeight: 200,
    resize: function(event, ui){
      $("point_1").css('z-index', '99998');
      $("point_1").css("margin", "0");
      var P2W = $(".point_2").css("width");
      var P2H = $(".point_2").css("height");
      $(".point_2_width").empty().prepend(P2W);
      $(".point_2_height").empty().prepend(P2H);
    }
    }).draggable({
      containment: "#wrong_picture",
      drag: function(event, ui){
        $(".point_2").css("z-index", "99998");
        $(".point_2").css("margin", "0");
        var span = $("span.out_put_point_2");
        var P2 = $(".point_2").position();
        span.html( "X: " + Math.floor( P2.left - 60 ) + ", Y: " + Math.floor( P2.top - 282 ) );
      }
    })
    $(".point_3").resizable({
    handles: "all",
    maxWidth: 200,
    maxHeight: 200,
    resize: function(event, ui){
      $("point_3").css('z-index', '99997');
      $("point_3").css("margin", "0");
      var P3W = $(".point_3").css("width");
      var P3H = $(".point_3").css("height");
      $(".point_3_width").empty().prepend(P3W);
      $(".point_3_height").empty().prepend(P3H);
    }
    }).draggable({
      containment: "#wrong_picture",
      drag: function(event, ui){
        $(".point_3").css("z-index", "99997");
        $(".point_3").css("margin", "0");
        var span = $("span.out_put_point_3");
        var P3 = $(".point_3").position();
        span.html( "X: " + Math.floor( P3.left - 60 ) + ", Y: " + Math.floor( P3.top - 282 ) );
      }
    })
    $(".point_4").resizable({
    handles: "all",
    maxWidth: 200,
    maxHeight: 200,
    resize: function(event, ui){
      $("point_4").css('z-index', '99996');
      $("point_4").css("margin", "0");
      var P4W = $(".point_4").css("width");
      var P4H = $(".point_4").css("height");
      $(".point_4_width").empty().prepend(P4W);
      $(".point_4_height").empty().prepend(P4H);
    }
    }).draggable({
      containment: "#wrong_picture",
      drag: function(event, ui){
        $(".point_4").css("z-index", "99996");
        $(".point_4").css("margin", "0");
        var span = $("span.out_put_point_4");
        var P4 = $(".point_4").position();
        span.html( "X: " + Math.floor( P4.left - 60 ) + ", Y: " + Math.floor( P4.top - 282 ) );
      }
    })
    $(".point_5").resizable({
    handles: "all",
    maxWidth: 200,
    maxHeight: 200,
    resize: function(event, ui){
      $("point_5").css('z-index', '99995');
      $("point_5").css("margin", "0");
      var P5W = $(".point_5").css("width");
      var P5H = $(".point_5").css("height");
      $(".point_5_width").empty().prepend(P5W);
      $(".point_5_height").empty().prepend(P5H);
    }
    }).draggable({
      containment: "#wrong_picture",
      drag: function(event, ui){
        $(".point_5").css("z-index", "99995");
        $(".point_5").css("margin", "0");
        var span = $("span.out_put_point_5");
        var P5 = $(".point_5").position();
        span.html( "X: " + Math.floor( P5.left - 60 ) + ", Y: " + Math.floor( P5.top - 282 ) );
      }
    })
  });
 
/* (・×・)　各種座標の取得　(・×・) */
(function($) {
  Pointer = {
    windowEvent : function(){
      if (window.event) return window.event;
      var caller = arguments.callee.caller;
      while(caller){
        var ob = caller.arguments[0];
        if(ob && ob.constructor == MouseEvent) return ob;
        caller = caller.caller;
      }
      return null;
    },
    //イベント発生時のウインドウのX座標
    getEventPageX : function(){
      var e = Pointer.windowEvent();
      if (e.pageX){
        return e.pageX;
      } else if(e.clientX){
        if (d.documentElement && typeof d.documentElement.scrollLeft != "undefined"){
          return d.documentElement.scrollLeft + e.clientX;
        } else if (d.body && typeof d.body.scrollLeft != "undefined"){
          return d.body.scrollLeft + e.clientX;
        }
      }
      return 0;
    },
    //イベント発生時のウインドウのY座標
    getEventPageY : function(){
      var e = Pointer.windowEvent();
      if (e.pageY){
        return e.pageY;
      } else if(e.clientY){
        if (d.documentElement && typeof d.documentElement.scrollTop != "undefined"){
          return d.documentElement.scrollTop + e.clientY;
        } else if (d.body && typeof d.body.scrollTop != "undefined"){
          return d.body.scrollTop + e.clientY;
        }
      }
      return 0;
    },
    //指定した要素内におけるイベント発生時のX座標
    //elemはjqueryオブジェクト
    getElementClientX : function(elem) {
      return Pointer.getEventPageX() - elem.offset().left;
    },
    //指定した要素内におけるイベント発生時のY座標
    getElementClientY : function(elem) {
      return Pointer.getEventPageY() - elem.offset().top;
    }
  }
})(jQuery); 
var SVGField = function()
{
  this.stage = Raphael(document.getElementById('svgcanvas'), 640, 480);
  this.changeEvent();
  this.addEvent();
  var obj = this;
  $('#figureType').change(function() {
    obj.changeEvent();
  });
}
SVGField.prototype.changeEvent = function()
{
  switch ($('#figureType').val()) {
    case 'circle' :
      this.scale = this.scaleCircle;
      break;
    case 'ellipse' :
      this.scale = this.scaleEllipse;
      break;
    case 'rect' :
      this.scale = this.scaleRect;
      break;
  }
}
SVGField.prototype.addEvent = function()
{
  var svgElem;
  var obj = this;
  $('#svgcanvas').unbind();
  $('#svgcanvas').mousedown(function() {
    a = 100;
    var elemX = Pointer.getElementClientX($(this));
    var elemY = Pointer.getElementClientY($(this));
    svgElem = new SVGDraw(obj.stage, elemX, elemY);
    $('#svgcanvas').mousemove(function() {
      var curX = Pointer.getElementClientX($(this)) - elemX;
      var curY = Pointer.getElementClientY($(this)) - elemY;
      if (curX >= curY) {
        var curR = curX;
      } else {
        curR = curY;
      }
      obj.scale(svgElem.svgElem, curX, curY, curR);
    });
  });
  $('#svgcanvas').mouseup(function() {
    $('#svgcanvas').unbind('mousemove');
    $('.dp-highlighter').remove();
    Code.output($('#svgcanvas'), $('#codeOutput'));
    dp.SyntaxHighlighter.HighlightAll('code');
  });
}
SVGField.prototype.scale = function()
{
  }
SVGField.prototype.scaleCircle = function(svgElem, curX, curY, curR)
{
  svgElem.attr({
    r : curR
  });
}
SVGField.prototype.scaleEllipse = function(svgElem, curX, curY, curR)
{
  svgElem.attr({
    rx : curX,
    ry : curY
  });
}
SVGField.prototype.scaleRect = function(svgElem, curX, curY, curR)
{
  svgElem.attr({
    width : curX,
    height : curY
  });
}
var SVGDraw = function(stage, elemX, elemY)
{
  this.elemX = elemX;
  this.elemY = elemY;
  this.figureType = $('#figureType').val();
  this.fill = $('#fill').css('background-color');
  this.stroke = $('#stroke').css('background-color');
  this.strokeWidth = $('#strokeWidth').val();
  this.fillOpacity = $('#fillOpacity').val();
  this.strokeOpacity = $('#strokeOpacity').val();
  this.svgElem = this.draw(stage);
}
SVGDraw.prototype.draw = function(stage)
{
  var elem;
  switch (this.figureType) {
    case "circle" :
      elem = this.drawCircle(stage);
      break;
    case "ellipse" :
      elem = this.drawEllipse(stage);
      break;
    case "rect" :
      elem = this.drawRect(stage);
      break;
    default :
      return false;
      break;
  }
  return elem;
}
SVGDraw.prototype.drawCircle = function(stage)
{
  var circle = stage.circle(this.elemX, this.elemY, 1);
  var x, y;
  circle.attr({
    'fill' : this.fill,
    'stroke' : this.stroke,
    'stroke-width' : this.strokeWidth,
    'fill-opacity' : this.fillOpacity,
    'stroke-opacity' : this.strokeOpacity
  })/*.drag(
function(dx, dy) {
this.attr({
cx : x + dx,
cy : y + dy
});
},
function() {
x = this.attr("cx");
y = this.attr("cy");
}
)*/;
  return circle;
}
SVGDraw.prototype.drawEllipse = function(stage)
{
  var ellipse = stage.ellipse(this.elemX, this.elemY, 0, 0);
  ellipse.attr({
    'fill' : this.fill,
    'stroke' : this.stroke,
    'stroke-width' : this.strokeWidth,
    'fill-opacity' : this.fillOpacity,
    'stroke-opacity' : this.strokeOpacity
  });
  return ellipse;
}
SVGDraw.prototype.drawRect = function(stage)
{
  var rect = stage.rect(this.elemX, this.elemY, 0, 0);
  rect.attr({
    'fill' : this.fill,
    'stroke' : this.stroke,
    'stroke-width' : this.strokeWidth,
    'fill-opacity' : this.fillOpacity,
    'stroke-opacity' : this.strokeOpacity
  });
  return rect;
}
//各種プラグインの読み込み
var Plugin =
{
  init : function()
  {
    //ColorPickerプラグインの読み込み
    $('#fill').ColorPicker({
      color : "#000000",
      onChange : function(hsb, hex, rgb)
      {
        $('#fill').css("background-color", "#" + hex);
      }
    });
    $('#stroke').ColorPicker({
      color : "#000000",
      onChange : function(hsb, hex, rgb)
      {
        $('#stroke').css("background-color", "#" + hex);
      }
    });
    //spinプラグインの読み込み
    $.spin.imageBasePath = 'jquery-spin/';
    $('#strokeWidth').spin({
      min: 0
    });
    $('#fillOpacity').spin({
      max: 1.0,
      min: 0.0,
      interval: 0.1
    });
    $('#strokeOpacity').spin({
      max: 1.0,
      min: 0.0,
      interval: 0.1
    });
  }
}
var Code =
{
  output : function(inJElem, outJElem)
  {
    //var code = inJElem.html().replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/&gt;&lt;/g, '&gt;<br />&lt;');
    var code = inJElem.html().replace(/></g, '>\n<');
    outJElem.html(code);
  }
}
$(function() {
  Plugin.init();
  var stage = new SVGField();
}); 
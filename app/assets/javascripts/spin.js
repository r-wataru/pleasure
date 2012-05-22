$(document).ready(function(){
  $.spin.imageBasePath = '/assets/colorpicker/';
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
});
// Generated by CoffeeScript 1.3.1
(function() {
  var randc;

  $(function() {
    $("#color1").html(randc());
    $("#color2").html(randc());
    $("#color3").html(randc());
    $("#color4").html(randc());
    $("#color5").html(randc());
    return $("#color6").html(randc());
  });

  randc = function() {
    return Math.round(Math.random() * 256) + ", " + Math.round(Math.random() * 256) + ", " + Math.round(Math.random() * 256);
  };

}).call(this);

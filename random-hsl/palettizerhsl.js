// Generated by CoffeeScript 1.3.1
(function() {
  var randa, randb, randc, randcolor;

  $(function() {
    var c1, c2, c3, c4, c5, c6;
    c1 = randcolor();
    $("#color1").css("background-color", c1);
    $("#color1").click(function() {
      return $(this).html(c1);
    });
    c2 = randcolor();
    $("#color2").css("background-color", c2);
    $("#color2").click(function() {
      return $(this).html(c2);
    });
    c3 = randcolor();
    $("#color3").css("background-color", c3);
    $("#color3").click(function() {
      return $(this).html(c3);
    });
    c4 = randcolor();
    $("#color4").css("background-color", c4);
    $("#color4").click(function() {
      return $(this).html(c4);
    });
    c5 = randcolor();
    $("#color5").css("background-color", c5);
    $("#color5").click(function() {
      return $(this).html(c5);
    });
    c6 = randcolor();
    $("#color6").css("background-color", c6);
    return $("#color6").click(function() {
      return $(this).html(c6);
    });
  });

  randa = function() {
    return Math.round(Math.random() * 360);
  };

  randb = function() {
    return Math.round(Math.random() * 100);
  };

  randc = function() {
    return Math.round(Math.random() * 100);
  };

  randcolor = function() {
    return 'hsl(' + randa() + "," + randb() + "%," + randc() + '%)';
  };

}).call(this);
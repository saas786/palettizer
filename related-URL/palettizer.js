// Generated by CoffeeScript 1.3.1
(function() {
  var convert_list_to_hsl, randcolor1, randcolor2, randcolor3, randcolor4, randcolor5, randcolor6, randh1, randl1, randl3, randl4, randl5, randl6, rands1, rands3, rands4, rands5, rands6;

  $(function() {
    var c1, c1_str, c2, c2_str, c3, c3_str, c4, c4_str, c5, c5_str, c6, c6_str, gc;
    c1 = randcolor1();
    c1_str = convert_list_to_hsl(c1);
    $("#color1").css("background-color", c1_str);
    $("#color1").click(function() {
      return $(this).html(c1_str);
    });
    c2 = randcolor2(c1);
    c2_str = convert_list_to_hsl(c2);
    $("#color2").css("background-color", c2_str);
    $("#color2").click(function() {
      return $(this).html(c2_str);
    });
    c3 = randcolor3(c1);
    c3_str = convert_list_to_hsl(c3);
    $("#color3").css("background-color", c3_str);
    $("#color3").click(function() {
      return $(this).html(c3_str);
    });
    c4 = randcolor4(c1);
    c4_str = convert_list_to_hsl(c4);
    $("#color5").css("background-color", c4_str);
    $("#color5").click(function() {
      return $(this).html(c4_str);
    });
    c5 = randcolor5(c2);
    c5_str = convert_list_to_hsl(c5);
    $("#color4").css("background-color", c5_str);
    $("#color4").click(function() {
      return $(this).html(c5_str);
    });
    c6 = randcolor6(c2);
    c6_str = convert_list_to_hsl(c6);
    $("#color6").css("background-color", c6_str);
    $("#color6").click(function() {
      return $(this).html(c6_str);
    });
    gc = [randh1(), rands1(), randl1()];
    return $("a#titlelink").attr("href", document.URL.split("?")[0] + '?var1=' + gc[0] + '&var2=' + gc[1] + '&var3=' + gc[2]);
  });

  convert_list_to_hsl = function(hsl_list) {
    return 'hsl(' + hsl_list[0] + "," + hsl_list[1] + "%," + hsl_list[2] + '%)';
  };

  randh1 = function() {
    return Math.floor(Math.random() * 361);
  };

  rands1 = function() {
    return Math.floor(Math.random() * (95 - 40 + 1) + 40);
  };

  randl1 = function() {
    return Math.floor(Math.random() * (60 - 40 + 1) + 40);
  };

  randcolor1 = function() {
    return [randh1(), rands1(), randl1()];
  };

  randcolor1 = function() {
    var entry, hash, q, vars, _i, _len;
    vars = {};
    q = document.URL.split("?")[1];
    q = q.split("&");
    for (_i = 0, _len = q.length; _i < _len; _i++) {
      entry = q[_i];
      hash = entry.split("=");
      vars[hash[0]] = +hash[1];
    }
    return [vars['var1'], vars['var2'], vars['var3']];
  };

  randcolor2 = function(c) {
    return [c[0] + 180, c[1], c[2]];
  };

  rands3 = function() {
    return Math.floor(Math.random() * 41);
  };

  randl3 = function() {
    return Math.floor(Math.random() * (100 - 70 + 1) + 70);
  };

  randcolor3 = function(c) {
    return [c[0], rands3(), randl3()];
  };

  rands4 = function() {
    return Math.floor(Math.random() * 31);
  };

  randl4 = function() {
    return Math.floor(Math.random() * (40 - 5 + 1) + 5);
  };

  randcolor4 = function(c) {
    return [c[0], rands4(), randl4()];
  };

  rands5 = function() {
    return Math.floor(Math.random() * 41);
  };

  randl5 = function() {
    return Math.floor(Math.random() * (100 - 70 + 1) + 70);
  };

  randcolor5 = function(c) {
    return [c[0], rands5(), randl5()];
  };

  rands6 = function() {
    return Math.floor(Math.random() * 41);
  };

  randl6 = function() {
    return Math.floor(Math.random() * (40 - 5 + 1) + 5);
  };

  randcolor6 = function(c) {
    return [c[0], rands6(), randl6()];
  };

}).call(this);



$(function() {
  setInterval(function() {
    $.get("/traffic/", function(body) {
      console.log("Body:", body);
      var value = parseFloat(body);
      $(".displayer").text(value);
      if(value > 0.0) {
        $("html, body").removeClass("red").addClass("green");
      } else {
        $("html, body").removeClass("green").addClass("red");
      }
    });
  }, 200);
});

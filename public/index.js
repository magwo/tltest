

$(function() {
  setInterval(function() {
    $.get("/traffic/", function(body) {
      console.log("Body:", body);
      var value = parseFloat(body);
      if(value > 0.0) {
        $("body").removeClass("red").addClass("green");
      } else {
        $("body").removeClass("green").addClass("red");
      }
    });
  }, 200);
});



$(function() {
  setInterval(function() {
    $.get("/traffic/", function(body)) {
      console.log("Body:", body);
    }
  }, 200);
});

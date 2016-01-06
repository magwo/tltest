

$(function() {
  setInterval(function() {
    var currentNumCars = parseInt($(".displayer").text().match(/\d+/)[0]);
    currentNumCars = Math.round(Math.random()*20);
    $(".displayer").text(currentNumCars + " vehicles");
  }, 1000);
});

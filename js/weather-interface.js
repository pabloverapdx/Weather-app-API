var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      $('.showHumidity').text("The humidity in " + city + " is " + response.main.humidity + "%");
      $('.showTemperatureKelvin').text("The Kelvin temperature in " + city + " is " + response.main.temp + ".");
      console.log (JSON.stringify(response));
    });
      console.log ("Notice: this comes before humidity");
  });

});

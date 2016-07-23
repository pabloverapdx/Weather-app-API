var apiKey = require('./../.env').apiKey;
var Temp = require('./../js/weather.js').Temp;

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {


      var newTemp = new Temp(response.main.temp);
      var celsius = newTemp.toCelcius();
      var fahrenheit = newTemp.toFahrenheit();

      $('.showHumidity').text("The humidity in " + city + " is " + response.main.humidity + "%");
      $('.showTemperatureKelvin').text("The Kelvin temperature in " + city + " is " + response.main.temp + ".");
      $('.showTemperatureCelsius').text(celsius);
      $('.showTemperatureFahrenheit').text(fahrenheit);
        // console.log (JSON.stringify(response));
      });
    });
});

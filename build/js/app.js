(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "b6a1f70b3c558795df031c4c2d030952";  

},{}],2:[function(require,module,exports){
exports.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
};

},{}],3:[function(require,module,exports){
exports.Temp = function(kelvin) {
  this.kelvin = kelvin;
};

exports.Temp.prototype.toCelcius = function() {
  var celsius = this.kelvin -273.15;
  return "The temperature in celsius is " + celsius.toFixed() + "C .";
};


exports.Temp.prototype.toFahrenheit = function() {
  var fahrenheit = (this.kelvin * (9/5)) - 459.67;
  return "The temperature in fahrenheit is " + fahrenheit.toFixed() + "F .";
};

},{}],4:[function(require,module,exports){
var pingPong = require('./../js/ping-pong.js').pingPong;

$(document).ready(function(){
  $('#ping-pong').submit(function(event){
    event.preventDefault();
    var goal = $('#goal').val();
    var output = pingPong(goal);
    output.forEach(function(element){
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});


$(document).ready(function(){
  $('#time').text(moment());
});

var apiKey = require('./../.env').apiKey;
var Temp = require('./../js/tempConvertion.js').Temp;

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
      console.log (celsius);
      console.log (fahrenheit);
      //for now this shows celsius and fahrenheit to the console


        // console.log (JSON.stringify(response));
      });
    });
});

},{"./../.env":1,"./../js/ping-pong.js":2,"./../js/tempConvertion.js":3}]},{},[4]);

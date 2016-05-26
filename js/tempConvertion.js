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

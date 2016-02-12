var pingPong = require('./ping-pong.js').pingPong;

var goal = prompt('What number would you like me to ping-pong up to?');
var result = pingPong(goal);
result.forEach(function(element){
  console.log(element);
});

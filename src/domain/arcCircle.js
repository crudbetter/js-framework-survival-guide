var Arc = require('./arc');

function Circle(values) {
  var totalValue = values.reduce(function(prev, cur) {
    return prev + cur;
  }, 0);
  var prevStartAngle = 0;

  var arcs = this.arcs = [];

  values.forEach(function(value) {
    var startAngle = prevStartAngle;
    var endAngle = prevStartAngle = (prevStartAngle + (360 / (totalValue / value))) % 360;

    arcs.push(new Arc(startAngle, endAngle));
  });
}

module.exports = Circle;
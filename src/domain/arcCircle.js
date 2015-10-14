var Arc = require('./arc');

function Circle(options) {
  this.totalValue = options.totalValue || options.values.reduce(function(prev, cur) {
    return prev + cur;
  }, 0);

  this.prevStartAngle = 0;
}

Circle.prototype.nextArc = function(value) {
  var startAngle = this.prevStartAngle;
  var endAngle = this.prevStartAngle = (this.prevStartAngle + (360 / (this.totalValue / value))) % 360;

  return new Arc(startAngle, endAngle);
}

module.exports = Circle;
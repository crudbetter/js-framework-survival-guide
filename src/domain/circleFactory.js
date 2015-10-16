var Arc = require('./arc');

module.exports = function(values) {
  var totalValue = values.reduce(function(prev, cur) {
    return prev + cur;
  }, 0);
  var prevEndAngle = 0;
  var iteratee = 0;

  return {
    nextArc: function() {
      if (iteratee == values.length) {
        return false;
      }

      var startAngle = prevEndAngle;
      var endAngle = prevEndAngle = (prevEndAngle + (360 / (totalValue / values[iteratee]))) % 360;

      iteratee++;

      return new Arc(startAngle, endAngle);
    }
  };
};
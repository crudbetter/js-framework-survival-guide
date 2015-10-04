function convertToRadians(angle) {
  return angle * (Math.PI / 180);
}

function point(angle) {
  angle = convertToRadians(angle);

  return {
    x: 1 * Math.cos(angle),
    y: 1 * Math.sin(angle)
  };
}

function Arc(startAngle, endAngle) {
  this.start = point(startAngle);
  this.end = point(endAngle);
  this.large = ((endAngle || 360) - startAngle) > 180;
}

Arc.prototype.toSVG = function() {
  return 'M0,0' +
    'L' + this.start.x + ',' + this.start.y +
    'A1,1,1,' + (this.large ? '1' : '0') + ',1,' + this.end.x + ',' + this.end.y +
    'Z';
};

module.exports = Arc;
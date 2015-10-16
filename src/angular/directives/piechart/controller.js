var circleFactory = require('../../../domain/circleFactory');

module.exports = function($scope, $attrs) {
  
  var slices;

  this.slices = slices = [];

  this.addSlice = function(sliceScope) {
    slices.push(sliceScope);
    sliceScope.$on('$destroy', function() {
      that.removeSlice(sliceScope);
    });
  };

  this.removeSlice = function(sliceScope) {
    slices.splice(slices.indexOf(sliceScope), 1);
    this.render();;
  };

  this.render = function() {
    var values = slices.map(function(slice) {
      return slice.value;
    });
    var circle = circleFactory(values);
    var arc;
    var i = 0;

    while (arc = circle.nextArc()) {
      slices[i].arc = arc;
      i++;
    }
  };
};
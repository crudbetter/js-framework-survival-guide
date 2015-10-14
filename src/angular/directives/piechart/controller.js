var Circle = require('../../../domain/arcCircle');

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
    var totalValue = slices.reduce(function(total, slice) {
      return total + slice.value;
    }, 0);

    var circle = new Circle({ totalValue: totalValue });

    angular.forEach(slices, function(slice) {
      slice.arc = circle.nextArc(slice.value);
    });
  };
};
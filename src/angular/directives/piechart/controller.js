var Arc = require('../../../domain/arc');

module.exports = function($scope, $attrs, piechartConfig) {
  
  var slices;

  this.slices = slices = [];

  this.addSlice = function(sliceScope) {
    slices.push(sliceScope);
  };

  this.removeSlice = function(sliceScope) {
    slices.splice(slices.indexOf(sliceScope), 1);
  };

  this.setArcs = function() {
    var prevStartAngle = 0;
    var totalValue = slices.reduce(function(total, slice) {
      return total + slice.value;
    }, 0);

    $scope.radius = angular.isDefined($attrs.radius) ? $scope.$eval($attrs.radius) : piechartConfig.radius;

    angular.forEach(slices, function(slice) {
      var startAngle = prevStartAngle;
      var endAngle = prevStartAngle = (prevStartAngle + (360 / (totalValue / slice.value))) % 360;

      slice.arc = new Arc(startAngle, endAngle);
    });
  };
};
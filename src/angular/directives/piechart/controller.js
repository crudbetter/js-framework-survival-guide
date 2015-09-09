module.exports = function($scope, $attrs, piechartConfig) {
  
  var slices;
  var getArc = function(startAngle, endAngle) {
    function convertToRadians(angle) {
      return angle * (Math.PI / 180);
    };

    function getPointOnCircle(angle) {
      return {
        x: 1 * Math.cos(angle),
        y: 1 * Math.sin(angle)
      };
    };

    return {
      start: getPointOnCircle(convertToRadians(startAngle)),
      end: getPointOnCircle(convertToRadians(endAngle))
    };
  };

  this.slices = slices = [];

  this.addSlice = function(sliceScope) {
    slices.push(sliceScope);
  };

  this.removeSlice = function(sliceScope) {
    slices.splice(slices.indexOf(sliceScope), 1);
  };

  this.setArcs = function() {
    var prevStartAngle = 0;
    var totalValue = 0;

    $scope.radius = angular.isDefined($attrs.radius) ? $scope.$eval($attrs.radius) : piechartConfig.radius;

    angular.forEach(slices, function(slice) {
      totalValue += slice.value;
    });

    angular.forEach(slices, function(slice) {
      slice.arc = getArc(
        prevStartAngle,
        prevStartAngle = (prevStartAngle + (360 / (totalValue / slice.value))) % 360
      );
      slice.arc.large = slice.value > (totalValue / 2);
    });
  };
};
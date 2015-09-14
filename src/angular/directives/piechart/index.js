var angular = require('angular');
var moduleName = 'survivalGuide.directives.piechart';

angular.module(moduleName, [])
  .constant('piechartConfig', {
    radius: 10
  })
	.controller('PiechartCtrl', require('./controller'))
	.directive('piechart', require('./piechart'))
	.directive('piechartSlice', require('./piechartSlice'));

module.exports = moduleName;
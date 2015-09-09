require('angular').module('survivalGuide')
  .constant('piechartConfig', {
    radius: 10
  })
	.controller('PiechartCtrl', require('./controller'))
	.directive('piechart', require('./piechart'))
	.directive('piechartSlice', require('./piechartSlice'));
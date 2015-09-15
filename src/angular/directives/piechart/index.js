module.exports = ['$provide', '$controllerProvider', '$compileProvider', function(provide, ctrl, compile) {
  provide.constant('piechartConfig', { radius: 10 });
  ctrl.register('PiechartCtrl', require('./controller'));
  compile.directive('piechart', require('./piechart'));
  compile.directive('piechartSlice', require('./piechartSlice'));
}];
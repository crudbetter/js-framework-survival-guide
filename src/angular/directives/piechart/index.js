module.exports = ['$controllerProvider', '$compileProvider', function(ctrl, compile) {
  ctrl.register('PiechartCtrl', require('./controller'));
  compile.directive('piechart', require('./piechart'));
  compile.directive('piechartSlice', require('./piechartSlice'));
}];
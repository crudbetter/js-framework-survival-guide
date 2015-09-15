module.exports = ['$controllerProvider', function(ctrl) {
  ctrl.register('ArticleCtrl', require('./article'));
  ctrl.register('CategoryCtrl', require('./category'));
}];
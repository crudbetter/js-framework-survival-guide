module.exports = function() {
  return {
    restrict: 'EA',
    require: '^piechart',
    replace: true,
    type: 'svg',
    template:
      '<path ng-attr-d="M0,0L{{arc.start.x}},{{arc.start.y}}A1,1,1,{{arc.large ? 1 : 0}},1,{{arc.end.x}},{{arc.end.y}}Z" />',
    scope: {
      value: '@'
    },
    link: function(scope, element, attrs, ctrl) {
      scope.value = parseInt(scope.value, 10);
      ctrl.addSlice(scope);

      attrs.$observe('value', function(value) {
        scope.value = parseInt(value, 10);
        ctrl.setArcs();
      });
    }
  };
}
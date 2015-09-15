var angular = require('angular');

var articleList = require('../domain/articleList');
articleList.push('Watch Client-Only state in AngularJS');
articleList.push('Demystifying React component state');

angular.module('survivalGuide', [
  'survivalGuide.controllers',
  'survivalGuide.directives'
]);

angular.module('survivalGuide.controllers', [
  require('./controllers')
]);

angular.module('survivalGuide.directives', [
  require('./directives/piechart')
]);
var angular = require('angular');

var articleList = require('../domain/articleList');
articleList.push('Watch Client-Only state in AngularJS');
articleList.push('Demystifying React component state');

angular.module('survivalGuide', [
  require('./controllers'),
  require('./directives/piechart')
]);
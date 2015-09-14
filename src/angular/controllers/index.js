var angular = require('angular');
var moduleName = 'survivalGuide.controllers';

angular.module(moduleName, [])
	.controller('ArticleCtrl', require('./article'))
	.controller('CategoryCtrl', require('./category'));

module.exports = moduleName;
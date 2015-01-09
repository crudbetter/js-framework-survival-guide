var Category = require('../../domain/category');

module.exports = function($scope) {

	$scope.categories = [
    new Category('JavaScript'),
    new Category('AngularJS')
  ];

	$scope.assignCategory = function(category, article) {
		category.assign(article);
	};
};
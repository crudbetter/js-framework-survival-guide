var Article = require('../../domain/article');

module.exports = function($scope) {

	$scope.articles = [
		new Article('The best way to share data between AngularJS controllers'),
		new Article('Demystifying React component state')
	];

	$scope.addArticle = function(title) {
		$scope.articles.push(new Article(title));
	};
};
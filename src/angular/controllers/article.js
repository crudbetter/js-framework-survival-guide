var articleList = require('../../domain/articleList');

module.exports = function($scope) {

	$scope.articles = articleList;

	$scope.addArticle = function(title) {
		$scope.articles.push(title);
	};
};
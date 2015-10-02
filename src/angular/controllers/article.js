var articleList = require('../../domain/articleList');
var Article = require('../../domain/article');

module.exports = function($scope) {

	$scope.articles = articleList;

  // **** DEMO PURPOSES ONLY ****
  Array.observer(articleList, function() {
    $scope.$digest();
  });
  // ****

	$scope.addArticle = function(title) {
		$scope.articles.push(new Article(title));
	};
};
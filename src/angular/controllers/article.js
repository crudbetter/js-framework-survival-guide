var articleList = require('../../domain/articleList');
var Article = require('../../domain/article');

module.exports = function($scope) {

	$scope.articles = articleList;

  // **** DEMO PURPOSES ONLY ****
  Array.observe(articleList, function() {
    $scope.$digest();
  });
  // ****

	$scope.addArticle = function() {
    if ($scope.title) {
    	$scope.articles.push(new Article($scope.title));
    }
	};
};
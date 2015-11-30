var categoryList = require('../../domain/categoryList');

module.exports = function($scope) {

	$scope.categories = categoryList;

	$scope.assignCategory = function(category, article) {
		category.toggle(article);
	};

  // **** DEMO PURPOSES ONLY ****
  categoryList.forEach(function(category) {
    Array.observe(category.articles, function() {
      $scope.$digest();
    });
  });
  // ****
  
  $scope.articleCount = function(category) {
    return category.articles.length;
  };
};
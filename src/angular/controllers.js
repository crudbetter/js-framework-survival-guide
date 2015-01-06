angular.module('survivalGuide.controllers')
	
	.controller('ArticleCtrl', function($scope) {

		$scope.articles = [
			new Article('The best way to share data between AngularJS controllers'),
			new Article('Demystifying React component state')
		];

		$scope.addArticle = function(title) {
			$scope.articles.push(new Article(title));
		};
	})

	.controller('CategoryCtrl', function($scope) {

		$scope.categories = [
      new Category('JavaScript'),
      new Category('AngularJS')
    ];

		$scope.assignCategory = function(category, article) {
			category.assign(article);
		};
	});
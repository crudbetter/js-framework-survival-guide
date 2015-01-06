angular.module('survivalGuide.services')
  .factory('ArticleList', function() {

    var idCounter = 0;
    var service = {};

    service.articles = [];

    service.add = function(title, author) {
      service.articles.push({
        id: idCounter++,
        title: title,
        author: author
      });
    };

    service.add('The best way to share data between AngularJS controllers', 'M Godfrey');
    service.add('Demystifying React component state', 'M Godfrey');

    return service;
  });
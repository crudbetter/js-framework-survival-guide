var angular = require('angular');
var React = require('react');
var articleList = require('./domain/articleList');
var categoryList = require('./domain/categoryList');

articleList.push('Managing Client-only state');
articleList.push('Demystifying React component state');

categoryList.push('JavaScript');
categoryList.push('AngularJS');

angular.module('survivalGuide', [
  'survivalGuide.controllers',
  'survivalGuide.directives'
]);

angular.module('survivalGuide.controllers', [
  require('./angular/controllers')
]);

angular.module('survivalGuide.directives', [
  require('./angular/directives/piechart')
]);

var Blog = require('./react/blog.jsx');

var renderedBlog = React.render(
  <Blog initialArticles={articleList} categories={categoryList} />,
  document.getElementById('blogContainer')
);

categoryList.forEach(function(category) {
  Array.observe(category.articles, function(article) {
    //renderedBlog.handleCategorise(article, category);
    renderedBlog.forceUpdate();
  });
});


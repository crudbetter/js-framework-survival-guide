var angular = require('angular');
var React = require('react');
var Article = require('./domain/article');
var Category = require('./domain/category');
var articleList = require('./domain/articleList');
var categoryList = require('./domain/categoryList');

articleList.push(new Article('Managing Client-only state'));
articleList.push(new Article('Demystifying React component state'));

categoryList.push(new Category('JavaScript'));
categoryList.push(new Category('AngularJS'));

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

// **** DEMO PURPOSES ONLY ****
Array.observe(articleList, function() {
  renderedBlog.forceUpdate();
});

categoryList.forEach(function(category) {
  Array.observe(category.articles, function(article) {
    renderedBlog.forceUpdate();
  });
});
// ****


'use strict';
var React = require('react');
var Blog = require('./blog.jsx');

var articleList = require('../domain/articleList');
var categoryList = require('../domain/categoryList');
var Article = require('../domain/Article');
var Category = require('../domain/category');

articleList.push(new Article('Managing Client-only state'));
articleList.push(new Article('Demystifying React component state'));

categoryList.push(new Category('JavaScript'));
categoryList.push(new Category('AngularJS'));

var renderedBlog = React.render(
  <Blog initialArticles={articleList} categories={categoryList} />,
  document.getElementById('blogContainer')
);
'use strict';
var React = require('react');
var Blog = require('./blog.jsx');

var articleList = require('../domain/articleList');
var Category = require('../domain/category');

articleList.push('Watch Client-Only state in AngularJS');
articleList.push('Demystifying React component state');

var categories = [
  new Category('JavaScript'),
  new Category('AngularJS')
];

var renderedBlog = React.render(
  <Blog initialArticles={articleList} categories={categories} />,
  document.getElementById('blogContainer')
);
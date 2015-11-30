'use strict';
var React = require('react');
var ArticleForm = require('./articleForm.jsx');
var ArticleList = require('./articleList.jsx');
var CategoryCount = require('./categoryCount.jsx');
var Piechart = require('./piechart.jsx');

var Blog = React.createClass({
  handleArticleSubmit: function(article) {
    var articles = this.state.articles;
    articles.push(article);
    this.setState(articles);
  },
  handleCategorise: function(article, categoryIndex) {
    var categories = this.state.categories;
    categories[categoryIndex].toggle(article);
    this.setState(categories);
  },
  getInitialState: function() {
    return {
      articles: this.props.initialArticles,
      categories: this.props.categories
    };
  },
  render: function() {
    var values = this.state.categories.map(function(category) {
      return category.articles.length;
    });
    
    return (
      <div>
        <h1>React</h1>
        <Piechart values={values} radius={100}/>
        <ArticleList articles={this.state.articles} categories={this.state.categories} handleCategorise={this.handleCategorise} />
        <hr />
        <ArticleForm onArticleSubmit={this.handleArticleSubmit} />
        <hr />
        <CategoryCount categories={this.state.categories} />
      </div>
    );
  }
});

module.exports = Blog;  
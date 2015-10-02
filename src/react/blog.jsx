'use strict';
var React = require('react/addons');
var ArticleForm = require('./articleForm.jsx');
var ArticleList = require('./articleList.jsx');
var CategoryCount = require('./categoryCount.jsx');

var Blog = React.createClass({
  handleArticleSubmit: function(article) {
    var newState = React.addons.update(this.state, {
      articles: { $push: [article] }
    });
    this.setState(newState);
  },
  handleCategorise: function(article, categoryIndex) {
    var category = this.state.categories[categoryIndex];
    category.assign(article);
    var newState = React.addons.update(this.state, {
      categories: { $splice: [[categoryIndex, 1, category]] }
    });
    this.setState(newState);
  },
  getInitialState: function() {
    return {
      articles: this.props.initialArticles,
      categories: this.props.categories
    };
  },
  render: function() {
    return (
      <div>
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
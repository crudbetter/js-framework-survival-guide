'use strict';
var React = require('react');
var ArticleForm = require('./articleForm.jsx');
var ArticleList = require('./articleList.jsx');
var CategoryCount = require('./categoryCount.jsx');

var Blog = React.createClass({
  handleArticleSubmit: function(title) {
    this.state.articles.push(title);
    this.forceUpdate();
    // or a sort of partial forced state update...
    //this.setState({ articles: this.state.articles });
  },
  handleCategorise: function(article, category) {
    category.assign(article);
    this.forceUpdate();
    // or a sort of partial forced state update...
    //this.setState({ categories: this.state.categories });
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
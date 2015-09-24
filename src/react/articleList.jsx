'use strict';
var React = require('react');
var CategoryButtons = require('./categoryButtons.jsx');

var ArticleList = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.articles.map(function(article, index) {
          return (
            <div>
              <p key={article}>{article.title}</p>
              <CategoryButtons categories={this.props.categories} onCategorise={this.props.handleCategorise.bind(null, article)} />
            </div>
          );
        }, this)}
      </div>
    );
  }
});

module.exports = ArticleList;
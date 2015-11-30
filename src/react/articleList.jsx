'use strict';
var React = require('react');
var CategoryButtons = require('./categoryButtons.jsx');

var ArticleList = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.articles.map(function(article, index) {
          return (
            <div className="row">
              <h3 key={article} className="col-md-12">{article.title}</h3>
              <CategoryButtons categories={this.props.categories} onCategorise={this.props.handleCategorise.bind(null, article)} />
            </div>
          );
        }, this)}
      </div>
    );
  }
});

module.exports = ArticleList;
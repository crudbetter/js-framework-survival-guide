'use strict';
var React = require('react');
var Article = require('../domain/article');

var ArticleForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var title = React.findDOMNode(this.refs.title).value.trim();
    if (!title) {
      return;
    }
    this.props.onArticleSubmit(new Article(title));
    React.findDOMNode(this.refs.title).value = '';
  },
  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref="title" />
        <input type="submit" value="Add Article" />
      </form>
    );
  }
});

module.exports = ArticleForm;
'use strict';
var React = require('react');

var CategoryCount = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.categories.map(function(category, index) {
          return (
            <span key={index}>
              {category.name + ' [' + category.articles.length + ']'}
            </span>
          );
        })}
      </div>
    );
  }
});

module.exports = CategoryCount;
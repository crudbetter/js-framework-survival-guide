'use strict';
var React = require('react');

var CategoryButtons = React.createClass({
  render: function() {
    return (
      <span>
        {this.props.categories.map(function(category, index) {
          return (
            <button onClick={this.props.onCategorise.bind(null, category)}>
              {category.name}
            </button>
          );
        }, this)}
      </span>
    );
  }
});

module.exports = CategoryButtons;
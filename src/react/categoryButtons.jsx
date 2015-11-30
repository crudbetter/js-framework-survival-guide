'use strict';
var React = require('react');

var CategoryButtons = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.categories.map(function(category, index) {
          return (
            <span className="col-md-3">
              <button onClick={this.props.onCategorise.bind(null, index)} className="btn btn-primary">
                {category.name}
              </button>
            </span>
          );
        }, this)}
      </div>
    );
  }
});

module.exports = CategoryButtons;
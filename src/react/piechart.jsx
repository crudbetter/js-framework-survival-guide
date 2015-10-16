'use strict';
var React = require('react');
var Slice = require('./piechartSlice.jsx');
var circleFactory = require('../domain/circleFactory');

var Piechart = React.createClass({
  render: function() {
    var radius = this.props.radius;
    var size = radius * 2 + 10;
    var circle = circleFactory(this.props.values);
    var slices = [];
    var arc;

    while (arc = circle.nextArc()) {
      slices.push(React.createElement(Slice, { arc: arc }));
    }

    return (
      <svg height={size} width={size}>
        <g transform={'translate(' + radius + ', ' + radius + '), scale(' + radius + ')'} 
          strokeWidth={1 / radius}>
            {slices}
        </g>
      </svg>
    );
  }
});

module.exports = Piechart;
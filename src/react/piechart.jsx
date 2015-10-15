'use strict';
var React = require('react');
var Slice = require('./piechartSlice.jsx');
var Circle = require('../domain/circle');

var Piechart = React.createClass({
  render: function() {
    var radius = this.props.radius;
    var size = radius * 2 + 10;
    var circle = new Circle({ values: this.props.values });

    return (
      <svg height={size} width={size}>
        <g transform={'translate(' + radius + ', ' + radius + '), scale(' + radius + ')'} 
          strokeWidth={1 / radius}>
            {this.props.values.map(function(value) {
              var arc = circle.nextArc(value);
              return (
                <Slice arc={arc} />
              );
            })}
        </g>
      </svg>
    );
  }
});

module.exports = Piechart;
'use strict';
var React = require('react');
var Slice = require('./piechartSlice.jsx');
var ArcCircle = require('../domain/arcCircle');

var Piechart = React.createClass({
  render: function() {
    var radius = this.props.radius;
    var size = radius * 2 + 10;
    var circle = new ArcCircle(this.props.values)

    return (
      <svg height={size} width={size}>
        <g transform={'translate(' + radius + ', ' + radius + '), scale(' + radius + ')'} 
          strokeWidth={1 / radius}>
            {circle.arcs.map(function(arc) {
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
'use strict';
var React = require('react');
var Slice = require('./piechartSlice.jsx');

var Piechart = React.createClass({
  render: function() {
    var radius = this.props.radius;
    var totalValue = this.props.values.reduce(function(prev, cur) {
      return prev + cur;
    }, 0);
    var prevStartAngle = 0;
    var size = radius * 2 + 10;

    return (
      <svg height={size} width={size}>
        <g transform={'translate(' + radius + ', ' + radius + '), scale(' + radius + ')'} 
          strokeWidth={1 / radius}>
            {this.props.values.map(function(value) {
              var startAngle = prevStartAngle;
              var endAngle = prevStartAngle = (prevStartAngle + (360 / (totalValue / value))) % 360;
              return (
                <Slice startAngle={startAngle} endAngle={endAngle}/>
              );
            }, this)}
        </g>
      </svg>
    );
  }
});

module.exports = Piechart;
'use strict';
var React = require('react');
var Arc = require('../domain/arc');

var Slice = React.createClass({
  render: function() {
    var arc = new Arc(this.props.startAngle, this.props.endAngle);

    return (
      <path d={arc.toSVG()} stroke={this.props.stroke || 'white'} fill={this.props.fill || 'black'} />
    );
  }
});

module.exports = Slice;
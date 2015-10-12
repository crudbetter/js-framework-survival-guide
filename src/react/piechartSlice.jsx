'use strict';
var React = require('react');

var Slice = React.createClass({
  render: function() {
    var a = this.props.arc;

    return (
      <path d={'M0,0L' + a.start.x + ',' + a.start.y + 'A1,1,1,' + (a.large ? '1' : '0') + ',1,' + a.end.x + ',' + a.end.y + 'Z'} 
        stroke={this.props.stroke || 'white'} 
        fill={this.props.fill || 'black'} />
    );
  }
});

module.exports = Slice;
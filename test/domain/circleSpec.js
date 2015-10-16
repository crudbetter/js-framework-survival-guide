var circleFactory = require('../../src/domain/circleFactory');

describe('A dircle', function() {
  var circle = circleFactory([10, 20, 30]);

  it('should create sequential arcs', function() {
    var curArc;
    var prevArc;

    while (curArc = circle.nextArc()) {
      if (prevArc) {
        expect(curArc.start).toEqual(prevArc.end);
      }
      prevArc = curArc;
    }
  });
})
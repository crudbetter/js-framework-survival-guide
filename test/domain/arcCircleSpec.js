var ArcCircle = require('../../src/domain/arcCircle');

describe('A dircle', function() {
  var circle = new ArcCircle([10, 20, 30]);

  it('should create sequential arcs', function() {
    expect(circle.arcs[0].start).toEqual(circle.arcs[2].end);
    expect(circle.arcs[1].start).toEqual(circle.arcs[0].end);
    expect(circle.arcs[2].start).toEqual(circle.arcs[1].end);
  });
})
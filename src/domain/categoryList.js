var Category = require('./Category');
var wrapMethod = require('./wrapMethod');

var list = [];

wrapMethod(list, 'push', function(original, title) {
  return original.call(this, new Category(title));
});

module.exports = list;
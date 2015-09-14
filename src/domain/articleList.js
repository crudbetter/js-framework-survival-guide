var Article = require('./article');

function wrapMethod(object, method, wrapper) {
  var fn = object[method];

  return object[method] = function() {
    return wrapper.apply(this, [fn.bind(this)].concat(
      Array.prototype.slice.call(arguments))
    );
  };
}

var list = [];

wrapMethod(list, 'push', function(original, title) {
  return original.call(this, new Article(title));
});

module.exports = list;
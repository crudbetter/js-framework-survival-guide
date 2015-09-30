module.exports = function wrapMethod(object, method, wrapper) {
  var fn = object[method];

  return object[method] = function() {
    return wrapper.apply(this, [fn.bind(this)].concat(
      Array.prototype.slice.call(arguments))
    );
  };
};
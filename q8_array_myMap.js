// Q8: Add custom myMap to Array.prototype
if (!Array.prototype.myMap) {
  Array.prototype.myMap = function(callback, thisArg) {
    if (this == null) {
      throw new TypeError('Array.prototype.myMap called on null or undefined');
    }
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }
    const result = [];
    for (let i = 0; i < this.length; i++) {
      if (i in this) {
        result[i] = callback.call(thisArg, this[i], i, this);
      }
    }
    return result;
  };
}

console.log([1,2,3].myMap(n => n * 2)); // [2,4,6]

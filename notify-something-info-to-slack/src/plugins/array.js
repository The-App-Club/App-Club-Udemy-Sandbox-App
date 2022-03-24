// https://gist.github.com/SauloSilva/9771598
Array.prototype.eachSlice = function (size) {
  this.arr = [];
  for (var i = 0, l = this.length; i < l; i += size) {
    this.arr.push(this.slice(i, i + size));
  }
  return this.arr;
};

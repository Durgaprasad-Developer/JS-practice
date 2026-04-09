Array.prototype.myFilter = function(callback, thisArg) {
    if(this == null) {
        throw new TypeError("Array cannot be null bro");
    }

    const result = [];

    for(let i=0; i<this.length; i++) {
        if(!(i in this)) continue;

        const condition = callback.call(thisArg, this[i], i, this);

        if(condition) {
            result.push(this[i]);
        }
    }
    return result;
}


const arr = [1, 2, 3, 4, 5, 6];
const evens = arr.myFilter(function (x) {
  return x % 2 === 0;
});
console.log(evens);
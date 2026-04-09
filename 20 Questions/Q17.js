Array.prototype.myMap = function (callback, thisArg) {
    if(this == null){
        throw new TypeError("Array cannot be null");
    }

    let result = [];

    for(let i=0; i<this.length; i++) {
        if(!(i in this)) continue;

        const value = callback.call(thisArg, this[i], i, this);

        result[i] = value;
    }

    return result;
}

const arr = [1, 2, 3];
const result = arr.myMap(function (x) {
  return x * 2;
});
console.log(result);
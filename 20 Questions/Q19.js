Array.prototype.myReduce = function(callback, initalValue) {
    if(this == null) {
        throw new TypeError("Array cannot be null bro");
    }

    if(this.length == 0) {
        throw new TypeError("Array cannot be empty bro");
    }

    let acc;
    let startIndex;

    if(initalValue == undefined){
        acc = this[0];
        startIndex = 1;
    }else{
        acc = initalValue;
        startIndex = 0;
    }

    for(let i=startIndex; i<this.length; i++) {
        if(!(i in this)) continue;

        acc = callback(acc, this[i], i, this);
    }

    return acc;
}   

const arr = [1, 2, 3, 4, 5];
const sum1 = arr.myReduce((acc, curr) => acc + curr, 0);
const sum2 = arr.myReduce((acc, curr) => acc + curr);
console.log(sum1);
console.log(sum2);
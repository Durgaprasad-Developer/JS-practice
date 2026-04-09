function myFilter(arr, callback) {
    if(arr == null) {
        throw new TypeError("Array cannot be null bro");
    }

    if(typeof callback !== "function"){
        throw new TypeError("callback should be a function");
    }

    const result = [];

    for(let i=0; i<arr.length; i++) {
        if(!(i in arr)) continue;

        const condition = callback(arr[i]);

        if(condition) {
            result.push(arr[i]);
        }
    }
    return result;


}
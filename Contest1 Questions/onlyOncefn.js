function once(fn) {
    let isDone = false, result;

    return function(...args) {
        if(!isDone) {
            isDone = true;
            result = fn(...args);
        }
        return result;
    }
}
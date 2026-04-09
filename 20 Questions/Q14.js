function createMemoizedAdd() {
  return function (n) {
    return n+n;
  };
}

const add = createMemoizedAdd();
console.log(add(5));
console.log(add(5));
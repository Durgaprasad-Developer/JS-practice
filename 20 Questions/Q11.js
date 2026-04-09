class Validator {
  #isEmpty(str) {
    return str === undefined || str === null || str.length == 0;
  }

  validate(str) {
    return !this.#isEmpty(str);
  }
}

const v = new Validator();
console.log(v.validate(""));
console.log(v.validate("hello"));
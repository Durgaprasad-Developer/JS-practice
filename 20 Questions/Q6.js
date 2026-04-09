function myNew(Constructor, ...args) {
    const obj = Object.create(Constructor.prototype);
    const result = Constructor.apply(obj, args);
    return (result !== null && (typeof result == "object" || typeof result == "function")) ? result : obj;
}

function Person(name) {
  this.name = name;
}

const person = myNew(Person, "John");
console.log(person.name);
console.log(person instanceof Person);
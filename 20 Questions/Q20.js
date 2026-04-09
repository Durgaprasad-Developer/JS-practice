const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 }
];

let result = people
    .filter(p=>p.age>=18)
    .map(p => `${p.name} is adult`)
    .reduce((acc, curr) => acc + (acc ? "; " : "") + curr)
console.log(result);
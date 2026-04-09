function Student(id, name) {
    this.id = id;
    this.name = name;
}

Student.prototype.getId = function () {
    return this.id;
};

const students = [
  new Student(101, "Ali"),
  new Student(102, "Bina")
];

const ids = students.map(s => s.getId());
console.log(ids);
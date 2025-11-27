// Q5: Person and Student constructor inheritance via prototypes
function Person(name) {
  this.name = name;
}

Person.prototype.printName = function() {
  console.log("Name:", this.name);
};

function Student(name, branch) {
  Person.call(this, name); // inherit properties
  this.branch = branch;
}

// inherit prototype methods
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.printBranch = function() {
  console.log("Branch:", this.branch);
};

const s = new Student("Ansh", "AIML");
s.printName();
s.printBranch();

// Demonstrates prototype chain: s -> Student.prototype -> Person.prototype

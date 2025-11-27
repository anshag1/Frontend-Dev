// Q9: Rewrite Person -> Student using ES6 classes
class Person {
  constructor(name) {
    this.name = name;
  }
  printName() {
    console.log("Name (class):", this.name);
  }
}

class Student extends Person {
  constructor(name, branch) {
    super(name);
    this.branch = branch;
  }
  printBranch() {
    console.log("Branch (class):", this.branch);
  }
}

const stu = new Student("Ansh", "AIML");
stu.printName();
stu.printBranch();

// Both prototype-based and class-based implementations produce equivalent behavior

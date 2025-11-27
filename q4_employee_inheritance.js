// Q4: Employee Inheritance (classes, runtime polymorphism)

class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
  work() {
    console.log(`${this.name} is working in ${this.department}`);
  }
}

class Manager extends Employee {
  constructor(name, department, manages = []) {
    super(name, department);
    this.manages = manages;
  }
  // override work()
  work() {
    console.log(`${this.name} (Manager) is planning and supervising ${this.department}`);
  }
}

// Demonstration of polymorphism
const e = new Employee('Danny', 'Support');
const m = new Manager('Eva', 'Engineering', ['Team A', 'Team B']);

[e, m].forEach(person => person.work()); // runtime decides which work() runs

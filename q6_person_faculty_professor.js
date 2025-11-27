// Q6: Prototype chain Person -> Faculty -> Professor
function Person(name) {
  this.personName = name;
}
Person.prototype.getPerson = function() {
  console.log("Person:", this.personName);
};

function Faculty(name, dept) {
  Person.call(this, name);
  this.dept = dept;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.getDept = function() {
  console.log("Dept:", this.dept);
};

function Professor(name, dept, title) {
  Faculty.call(this, name, dept);
  this.title = title;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.getTitle = function() {
  console.log("Title:", this.title);
};

const prof = new Professor("Dr. A", "CS", "Associate Professor");
prof.getPerson(); // from Person
prof.getDept();   // from Faculty
prof.getTitle();  // from Professor

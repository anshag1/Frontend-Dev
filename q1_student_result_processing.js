// Q1: Student Result Processing (reduce + Classes)
// Create Student class with name and marks[], calculateAverage using reduce, and grade.
class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  calculateAverage() {
    if (!Array.isArray(this.marks) || this.marks.length === 0) return 0;
    const sum = this.marks.reduce((acc, m) => acc + m, 0);
    return sum / this.marks.length;
  }

  getGrade() {
    const avg = this.calculateAverage();
    if (avg >= 80) return 'A';
    if (avg >= 60) return 'B';
    if (avg >= 40) return 'C';
    return 'F';
  }
}

// Test 3 students
const s1 = new Student('Alice', [85,90,78]);
const s2 = new Student('Bob', [65,58,72]);
const s3 = new Student('Charlie', [30,40,35]);

console.log(s1.name, 'Average:', s1.calculateAverage(), 'Grade:', s1.getGrade());
console.log(s2.name, 'Average:', s2.calculateAverage(), 'Grade:', s2.getGrade());
console.log(s3.name, 'Average:', s3.calculateAverage(), 'Grade:', s3.getGrade());

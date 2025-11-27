// Q3: object with name and showName as arrow function
const user = {
  name: "Ansh",
  // Arrow function: does not have its own 'this'
  showName: () => {
    console.log("Arrow showName this.name:", this.name);
  }
};

user.showName(); // this.name will be undefined because arrow uses lexical 'this'

// Fix using normal function:
const userFixed = {
  name: "Ansh",
  showName() {
    console.log("Normal showName this.name:", this.name);
  }
};

userFixed.showName(); // logs "Ansh"

// Explanation (in comments):
// Arrow functions do not bind their own 'this'; they inherit 'this' from the surrounding scope.
// When used as object methods, 'this' will not refer to the object, so this.name is undefined.

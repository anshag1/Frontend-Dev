// Q4: Constructor Car and prototype method getDetails
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

Car.prototype.getDetails = function() {
  console.log(`Car: ${this.brand} ${this.model}`);
};

const car1 = new Car("Toyota", "Corolla");
const car2 = new Car("Honda", "Civic");

car1.getDetails();
car2.getDetails();

// Shows method sharing via prototype
console.log("car1.__proto__ === car2.__proto__:", car1.__proto__ === car2.__proto__);

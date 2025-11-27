// Q3: Product Discount System (constructor + prototype)
// Product constructor and prototype method applyDiscount(percent) returning new price

function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.applyDiscount = function(percent) {
  if (typeof percent !== 'number' || percent < 0 || percent > 100) {
    throw new Error('Invalid discount percent');
  }
  const discounted = this.price * (1 - percent / 100);
  return Number(discounted.toFixed(2));
};

// Create products and apply discounts
const p1 = new Product('Notebook', 200);
const p2 = new Product('Headphones', 1500);
const p3 = new Product('Pen', 20);

console.log(p1.name, 'Original:', p1.price, 'After 10%:', p1.applyDiscount(10));
console.log(p2.name, 'Original:', p2.price, 'After 25%:', p2.applyDiscount(25));
console.log(p3.name, 'Original:', p3.price, 'After 5%:', p3.applyDiscount(5));

// Abstraction note (in comments): Using a Product constructor encapsulates price and methods like applyDiscount,
// so any consumer only needs to call applyDiscount without worrying about internal price calculation logic.

// Q6: E-Commerce Inventory System (array methods)

const products = [
  { id:1, name:'Shirt', category:'Clothing', price:500, stock:10 },
  { id:2, name:'Jeans', category:'Clothing', price:1200, stock:2 },
  { id:3, name:'Watch', category:'Accessories', price:2500, stock:0 },
  { id:4, name:'Socks', category:'Clothing', price:100, stock:50 },
  { id:5, name:'Sunglasses', category:'Accessories', price:800, stock:3 }
];

function getLowStockProducts(threshold = 5) {
  return products.filter(p => p.stock <= threshold);
}

function sortProductsByPrice(ascending = true) {
  return [...products].sort((a,b) => ascending ? a.price - b.price : b.price - a.price);
}

function calculateTotalInventoryValue() {
  return products.reduce((acc, p) => acc + p.price * p.stock, 0);
}

function groupByCategory() {
  return products.reduce((acc, p) => {
    if (!acc[p.category]) acc[p.category] = [];
    acc[p.category].push(p);
    return acc;
  }, {});
}

// Tests
console.log('Low stock:', getLowStockProducts());
console.log('Sorted by price:', sortProductsByPrice());
console.log('Total inventory value:', calculateTotalInventoryValue());
console.log('Grouped by category:', groupByCategory());

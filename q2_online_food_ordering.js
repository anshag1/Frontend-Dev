// Q2: Online Food Ordering (map + Error Handling)
// calculateBill(orderItems) uses map to get prices and reduce to total. Throws error if invalid item.

const menu = {
  'burger': 120,
  'pizza': 300,
  'fries': 80,
  'soda': 40
};

function calculateBill(orderItems) {
  if (!Array.isArray(orderItems)) throw new TypeError('Order must be an array');
  // map to list of prices, validating existence
  const prices = orderItems.map(item => {
    if (!menu.hasOwnProperty(item)) throw new Error(`Invalid item ordered: ${item}`);
    return menu[item];
  });
  // reduce to total
  const total = prices.reduce((acc, p) => acc + p, 0);
  return total;
}

// Demo usage
try {
  const bill1 = calculateBill(['burger','fries','soda']);
  console.log('Total bill:', bill1);
  const bill2 = calculateBill(['pizza','icecream']); // icecream not on menu -> error
  console.log('This will not print:', bill2);
} catch (err) {
  console.error('Order error:', err.message);
}

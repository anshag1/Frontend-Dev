// Q2: applyOperation(numbers, operation)
function applyOperation(numbers, operation) {
  return numbers.map(operation);
}

const nums = [1,2,3,4];

// Double each number
const doubled = applyOperation(nums, n => n * 2);
console.log("Doubled:", doubled);

// Square each number
const squared = applyOperation(nums, n => n * n);
console.log("Squared:", squared);

// Expected output:
// Doubled: [2,4,6,8]
// Squared: [1,4,9,16]

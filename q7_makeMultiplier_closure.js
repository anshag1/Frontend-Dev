// Q7: makeMultiplier demonstrates closures
function makeMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

const triple = makeMultiplier(3);
console.log("triple(5):", triple(5)); // 15

// Explanation:
// The inner function closes over the 'multiplier' variable from the outer scope.
// Even after makeMultiplier has finished executing, the returned function retains access to 'multiplier'.

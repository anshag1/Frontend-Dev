// Q1: greetUser with callback flow
// Create greetUser(name, callback) that prints Hello <name> then calls callback
function showEndMessage() {
  console.log("Welcome to the course!");
}

function greetUser(name, callback) {
  console.log(`Hello ${name}`);
  // simulate async-ish flow by calling callback afterwards
  callback();
}

// Demonstration:
greetUser("Ansh", showEndMessage);

// Expected output:
// Hello Ansh
// Welcome to the course!

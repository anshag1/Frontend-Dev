// Q8 – Retry Logic
function submitOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.5 ? resolve("Order Success") : reject("Order Failed");
    }, 500);
  });
}

async function processOrder() {
  for (let i = 1; i <= 3; i++) {
    try {
      const msg = await submitOrder();
      console.log(`Attempt ${i}: Success`);
      return;
    } catch {
      console.log(`Attempt ${i}: Failed`);
    }
  }
  throw new Error("Order could not be processed");
}

processOrder().catch(err => console.error(err.message));

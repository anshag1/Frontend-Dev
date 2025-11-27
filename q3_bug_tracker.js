// Q3 – Convert Callback to Promise
function getBugs() {
  return new Promise((resolve, reject) => {
    const failure = Math.random() < 0.3;
    setTimeout(() => {
      if (failure) reject("API Failed");
      else resolve(["UI glitch", "API timeout", "Login failure"]);
    }, 1000);
  });
}

getBugs()
  .then(bugs => console.table(bugs))
  .catch(err => console.error("Error:", err));

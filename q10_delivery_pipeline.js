// Q10 – Async Delivery Pipeline

function step(name){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      Math.random() < 0.85 ? resolve(name) : reject(name + " failed");
    }, 800 + Math.random()*800);
  });
}

async function runPipeline(){
  console.log("Start Pipeline");
  try{
    console.log("Step 1:", await step("Order taken"));
    console.log("Step 2:", await step("Food prepared"));
    console.log("Step 3:", await step("Package ready"));
    console.log("Step 4:", await step("Out for delivery"));
    console.log("Delivery completed!");
  } catch(err){
    console.error("Pipeline failed!", err);
  }
}

runPipeline();

// Q5 – Callback hell and async/await rewrite

// --- Callback Hell ---
function design(cb){ setTimeout(() => { console.log("Design"); cb(); },1000); }
function build(cb){ setTimeout(() => { console.log("Build"); cb(); },1000); }
function test(cb){ setTimeout(() => { console.log("Test"); cb(); },1000); }
function deploy(cb){ setTimeout(() => { console.log("Deploy"); cb(); },1000); }
function celebrate(cb){ setTimeout(() => { console.log("Celebrate"); cb(); },1000); }

design(() => {
  build(() => {
    test(() => {
      deploy(() => {
        celebrate(() => console.log("Pipeline done!"));
      });
    });
  });
});

// --- Async/Await Version ---
function step(name){
  return new Promise(resolve => {
    setTimeout(() => { console.log(name); resolve(); }, 1000);
  });
}

async function cleanPipeline(){
  await step("Design");
  await step("Build");
  await step("Test");
  await step("Deploy");
  await step("Celebrate");
}

cleanPipeline();

// async/await removes nesting → more readable linear flow.

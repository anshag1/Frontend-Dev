// Q9 Odd–Even Number Analyzer
let arr=[];
for(let i=1;i<=30;i++){
 if(i%3===0 && i%5===0) arr.push("FizzBuzz");
 else if(i%2===0) arr.push("Even");
 else arr.push("Odd");
}
console.log(arr);

"use strict";
// Q1 Dynamic Data Parser
const apiData = ["25","true","false","NaN","  ","100px","3.14",null,undefined];
let valid=[], invalid=[];
for(let val of apiData){
    let num = Number(val);
    if(!isNaN(num) && val !== " " && val !== "100px") valid.push(num);
    else invalid.push(val);
}
console.log("Valid:",valid);
console.log("Invalid:",invalid);

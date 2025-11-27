"use strict";
// Q10 Nested Hoisting and Closures
function outer(){
 console.log(undefined);
 var count=5;
 function inner(){
   console.log(undefined);
   var count=10;
 }
 inner();
}
outer();

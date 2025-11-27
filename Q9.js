"use strict";
// Q9 JSON Audit
const rawData=['{"user":"Alex","age":25}','{"id":2}','{invalid}','{"user":"Mina","age":"22"}'];
let clean=[];
rawData.forEach((entry,i)=>{
 try{
   let obj=JSON.parse(entry);
   if(!obj.user || !obj.age) throw "Missing Keys";
   obj.age=Number(obj.age);
   if(obj.age<18) throw "UnderAge";
   clean.push(obj);
 }catch(e){ console.log("Error at line",i+1,":",e); }
});
console.log(clean);

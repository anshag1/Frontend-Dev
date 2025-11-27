// Q8 Dynamic Discount Evaluator
const cart=[
 {item:"Laptop",category:"electronics",price:45000},
 {item:"Shoes",category:"fashion",price:2500},
 {item:"Book",category:"education",price:600}
];
let total=0;
for(let c of cart){
 let discount=c.category==="electronics"?0.10:
              c.category==="fashion"?0.05:0;
 c.finalPrice=c.price-(c.price*discount);
 total+=c.finalPrice;
}
if(total>50000) total*=0.95;
console.log("Final Total:",total);

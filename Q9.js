// Q9 Shopping Cart Total
class Cart{
 constructor(){ this.items=[]; }
 addItem(n,p,q){ this.items.push({n,p,q}); }
 getTotal(){ return this.items.reduce((t,i)=>t+i.p*i.q,0); }
 applyCoupon(code){
  if(!/^(SAVE|DISC)\d{2}$/.test(code)) return this.getTotal();
  let disc=parseInt(code.match(/\d+/)[0]);
  return this.getTotal() * (1 - disc/100);
 }
}
let c=new Cart();
c.addItem("Bag",1000,2);
console.log(c.applyCoupon("SAVE20"));

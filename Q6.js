// Q6 Progressive Discount System
let total = 6500;
let discount = total>=10000?25: total>=5000?15: total>=2000?5:0;
let final = total - (total*discount/100);
console.log({total,discount,final:Math.round(final)});

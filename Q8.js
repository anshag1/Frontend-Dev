// Q8 Employee Salary Projection
let salary = 30000, rate=10;
let projection=[];
for(let i=1;i<=5;i++){
 salary += salary*(rate/100);
 projection.push({Year:i,Salary:Math.round(salary)});
}
console.table(projection);

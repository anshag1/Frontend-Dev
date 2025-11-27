// Q3 Monthly Expense Tracker
let expenses = [5000,1500,8000,2500,1200];
let total = expenses.reduce((a,b)=>a+b,0);
let average = total/expenses.length;
let finalAmount = total*1.10;
console.log("Total:", total.toFixed(2));
console.log("Average:", average.toFixed(2));
console.log("After Tax:", finalAmount.toFixed(2));

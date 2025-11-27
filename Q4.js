// Q4 Academic Performance Evaluator
let marks = [85,78,91,66,72];
if(marks.some(m=>m<35)) console.log("Detained");
else {
 let total = marks.reduce((a,b)=>a+b,0);
 let percent = total/marks.length;
 if(percent>=85) console.log("Promoted with Distinction");
 else if(percent>=50) console.log("Promoted");
 else console.log("Detained");
}

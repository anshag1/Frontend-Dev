// Q6 Employee Management
class Employee{
 constructor(id,name,dept,salary){ this.id=id; this.name=name; this.department=dept; this.salary=salary; }
 getAnnualSalary(){ return this.salary*12; }
 applyBonus(p){ this.salary += this.salary*(p/100); }
}
let employees=[ new Employee(1,"A","Tech",30000), new Employee(2,"B","HR",20000) ];
console.log(employees.reduce((t,e)=>t+e.getAnnualSalary(),0));

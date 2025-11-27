// Q2 Student Form Validator (logic only)
const validate={
 name:n=>/^[A-Za-z ]+$/.test(n),
 email:e=>/^[\w.-]+@[\w.-]+\.\w+$/.test(e),
 phone:p=>/^\d{10}$/.test(p),
 pass:s=>/(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}/.test(s)
};
console.log(validate.name("John"), validate.email("a@b.com"));

// Q7 Login Validation
const validateUser=(u,p)=>{
 if(!/^.{5,}$/.test(u)) return false;
 if(!/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}/.test(p)) return false;
 return true;
};
console.log(validateUser("adminX","Pass@123"));

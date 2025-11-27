// Q8 Dynamic Object Updater
let user={name:"John",email:"john@mail.com",age:21};
function updateUser(key,val){ user[key]=val; }
updateUser("age",22);
console.log(user);

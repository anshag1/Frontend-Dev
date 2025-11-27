// Q5 Movie Ticket Booking
function validate(name,email,seats){
 if(!/^[A-Za-z ]+$/.test(name)) return false;
 if(!/^[\w.-]+@[\w.-]+\.\w+$/.test(email)) return false;
 if(!(seats>=1 && seats<=10)) return false;
 return {name,email,seats};
}
console.log(validate("John","a@b.com",3));

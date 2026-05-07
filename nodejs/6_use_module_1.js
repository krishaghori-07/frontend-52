//import local module 
// here dt is alias for datetime (we must use it call functions)
const dt = require('./datetime');
const m = require('./math_module');
const pwd = require('./security');
const ms = require('./messenger');
console.log(dt.getDate());
console.log(dt.getTime()); 

//call function of math_module
num1 = 90;
num2 = 9;

console.log("addition ",m.add(num1,num2)); //calling function add of math_module
console.log("subtraction ",m.sub(num1,num2))
console.log("multiplication ",m.mul(num1,num2))
console.log("division ",m.div(num1,num2))

original_password = "apple";
//create object 
let p  = new pwd.PasswordManager();
let hashed_password = p.getHashPassword();
console.log(hashed_password);

//create object
let mailer = new ms.Mail('ghanshyam@gmail.com','test subject','test message');
mailer.sendEmail();

// () parenthesis 
// [] bracket
// {} braces



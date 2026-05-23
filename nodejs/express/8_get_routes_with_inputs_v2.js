var express = require('express');
var app = express();
//get routes with inputs 
http://127.0.0.1:5000/add?num1=10&num2=3
//?num1=10&num2=3 it is called query string 
app.get("/add/:num1/:num2", function (request, response) {
    let num1 = request.params.num1;
    let num2 = request.params.num2;

    let addition = parseInt(num1) + parseInt(num2);
    response.send("addition " + addition);
});
// task do subtraction, multiplication, division as above using get routes 
app.use(function(request,response){
    response.send("bad request. no such route exists...");
});
app.listen(5000);
console.log('ready to accept request.');

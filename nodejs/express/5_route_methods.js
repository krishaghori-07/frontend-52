var express = require('express');
var bodyParser = require('body-parser');
var app = express();
//define middleware
app.use(express.urlencoded({'extended':true}));
app.use(bodyParser.json());
var list = [
    {'name':'Ram','mobile':1234567890},
    {'name':'Laxman','mobile':1122334455},
    {'name':'Bharat','mobile':6677889900},
];

//get contact
app.get("/contact", function (request, response) {
    response.json(list);
});

app.post("/contact", function (request, response) {
    var name = request.body.name;
    var mobile = request.body.mobile;
    //create object
    var person = {'name':name,'mobile':mobile};
    //object insert into list 
    list.push(person);
    response.json([{'error':'no'},{'success':'yes'},{'message':'contact inserted'}])
});

app.put("/contact", function (request, response) {
    response.send("i will update contacts");
});

app.delete("/contact", function (request, response) {
    response.send("i will delete contacts");
});

app.listen(5000);
console.log('ready to accept request.');

var express = require('express');
var app = express();

// create route for home 
app.get("/",function(request,response){
    response.send("<html><body><h1>Home</h1><hr/><p>this is home page</p></body></html>");
});

// create route for aboutus
app.get("/aboutus",function(request,response){
    response.send("<html><body><h1>About us</h1><hr/><p>this is aboutus page</p></body></html>");
});
// create route for contactus
app.get("/contactus",function(request,response){
    response.send("<html><body><h1>Contact us</h1><hr/><p>this is Contact us page</p></body></html>");
});

// create route for course
app.get("/course",function(request,response){
    response.send("<html><body><h1>course</h1><hr/><p>this is course page</p></body></html>");
});

// create route for non existing page
// app.all("*",function(request,response){
//     response.send("<html><body><h1>page not found</h1><hr/><p>no such page exists</p></body></html>");
// });

app.listen(5000);
console.log('ready to accept reqeust.');

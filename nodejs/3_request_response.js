//import http module and store it's reference into http 
var http = require('http');
//create server 
var server = http.createServer(function (request, response) {
    
    console.log(request.url); //compulsory
    response.writeHead(200,{'content-type':'html'});

    if (request.url === '/') {
        response.write("Hello i am home page");
    }
    else if (request.url === '/fruits') {
        response.write("Apple banana mango pineapple graps");
    }
    else if (request.url === '/vegetables') {
        response.write("potato tomato lady finger garlic");
    }
    else if (request.url === '/grains') {
        response.write("wheat rise corn etc");
    }
    else {
        response.write("sorry, we dont have any web page");
    }
    response.end(); //compulsory
});

//create variable to store port no 
const portno = 5000; //read only variable (constant)
//server run
server.listen(portno);
//how to send request on server 
// open browser 
// then copy paste below text into addressbar
//http://localhost:5000/
console.log('ready to accept request on ', portno);
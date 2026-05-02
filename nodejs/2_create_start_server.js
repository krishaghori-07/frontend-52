//import http module and store it's reference into http 
var http = require('http');
var count = 0;
//create server 
var server = http.createServer(function(request,response){
    //this anonyms function will run for each and every request received by nodejs server.
    count = count + 1;
    console.log('I have received request. ',count);   
});

//create variable to store port no 
const portno = 5000; //read only variable (constant)
//server run
server.listen(portno);
//how to send request on server 
// open browser 
// then copy paste below text into addressbar
//http://localhost:5000/
console.log('ready to accept request on ',portno);
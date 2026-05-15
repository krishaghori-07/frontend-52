const http = require('http');
const fs = require('fs');
var server = http.createServer(function (request, response) {
    var name = "ram patel";
    var mobile = "1111112857";
    var email = "rampatel@gmail.com"
    var message = "I want to join your course."
    var filename = "student.txt";
    var FileContent = `name = ${name}\nmobile =${mobile}\nemail = ${email} \n message=${message} \n`;
    response.writeHead(200, { 'content-type': 'text/html' });
    fs.appendFile(filename, FileContent, function (error) {
        if (error)
            response.write('oops something went wrong');
        else
            response.write('thank your for contacting us, we will call your shortly');
        return response.end();
    });
    
    console.log('i have successfully read file');
});
server.listen(5000);
console.log('ready to accept request');
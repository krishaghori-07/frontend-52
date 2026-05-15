const http = require('http');
const fs = require('fs');
const url = require('url');
var server = http.createServer(function (request, response) {
    var address = url.parse(request.url, true);
    var page = address.pathname;
    console.log(page);
    var filename = '404.html';
    if (page === '/') {
        filename = 'home.html';
    }
    else if (page === '/aboutus') {
        filename = 'aboutus.html';
    }
    else if (page === '/course') {
        filename = 'course.html';
    }
    else if (page === '/contactus') {
        filename = 'contactus.html';
    }
    else if (page === '/save') {
        //write data into file 
        var { name, mobile, email, message } = address.query;
        var FileContent = `name = ${name}\nmobile =${mobile}\nemail = ${email} \n message=${message} \n`;
        
        fs.appendFile('student.txt', FileContent, function (error) {
            if (error)
                console.log('oops something went wrong');
            else
                response.console('thank your for contacting us, we will call your shortly');
        });

        
        filename = 'contactus.html';
    }
    fs.readFile(filename, function (error, FileContent) {
        console.log('i am trying to read file');
        response.writeHead(200, { 'content-type': 'text/html' });
        response.write(FileContent);
        return response.end();
    });
    console.log('i have successfully read file');
});
server.listen(5000);
console.log('ready to accept request');
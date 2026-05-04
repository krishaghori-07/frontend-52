var http = require('http')

const karan = { name: "Karan Patel", gender: "Male", weight: 72, mobile: "9876543210" };
const lalji = { name: "Lalji Bhai", gender: "Male", weight: 80, mobile: "9825012345" };
const mayur = { name: "Mayur Shah", gender: "Male", weight: 68, mobile: "9898989898" };
const krisha = { name: "Krisha Mehta", gender: "Female", weight: 55, mobile: "9812345678" };

var server = http.createServer(function (request, response) {
    response.writeHead(200, { "content-type": "application/JSON" })
    let data;
    if (request.url === '/karan') {
        data = JSON.stringify(karan);
    }
    else if (request.url === '/lalji') {
        data = JSON.stringify(lalji);
    }
    else if (request.url === '/mayur') {
        data = JSON.stringify(mayur);
    }
    else if (request.url === '/krisha') {
        data = JSON.stringify(krisha);
    }
    else {
        data = JSON.stringify({ message: 'not found' });
    }
    response.write(data);
    response.end();
});

const PORT = 5000;
server.listen(PORT);
console.log('ready to accept request')
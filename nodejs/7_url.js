const http = require('http')
const url = require('url')

//create server 
var server = http.createServer((request, response) => {
    var address = url.parse(request.url, true);
    console.log(address.href);
    response.writeHead(200, { 'content-type': 'text/html' });
    //object destructing 
    var { name, price, stock } = address.query;
    var output = '';

    if (name !== undefined) {
        output += `name = ${name} `;
    }
    if (price !== undefined) {
        output += ` price = ${price}`;
    }
    if (stock !== undefined) {
        output += ` stock = ${stock}`;
    }
    response.write(output);
    response.end();
});

//create server 
server.listen(5000);
console.log('ready to accept request');
const express = require('express');
const connection = require('./connection.js');
var bodyParser = require('body-parser');

var app = express();

app.use(express.urlencoded({ 'extended': true }));
app.use(bodyParser.json());

const CATEGORY = "/category"; //route path/api address 
app.get(CATEGORY, function (request, response) {
    response.send('get request received');
});

app.post(CATEGORY, function (request, response) {

    var name = request.body.name;
    var detail = request.body.detail;

    sql = `insert into category 
    (name,detail,photo) values 
    ('${name}','${detail}','photo2.jpg')`;

    // run sql statement
    connection.con.query(sql, function (error, result) {
        //this function will run after sql statement executes if sql statement fails then error variable will be not null 
        // if sql statement success then result variable be not null 
        if (error != null) {
            console.log(error);
            response.json([{ 'error': 'oops something went wrong' }]);
        }
        else {
            // no error
            response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'category' }])
        }
    });
});

app.put(CATEGORY, function (request, response) {
    response.send('update request received');
});

app.delete(CATEGORY, function (request, response) {
    response.send('delete request received');
});

app.listen(5000);
console.log('ready to accept reqeust')


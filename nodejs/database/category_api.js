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

    const name = request.body.name;
    const detail = request.body.detail;
    //check name and details are not empty 

    if (name === undefined || detail === undefined) {
        response.json([{ 'error': 'input missing' }])
    }
    else {
        //parameterized queries (also known as prepared statements)
        const sql = `insert into category (name,detail,photo) values (?,?,?)`;
        //create list that has 3 items because there 3 question marks(place holder)
        const data = [name, detail, 'photo.jpg']
        // run sql statement
        connection.con.query(sql, data, function (error, result) {
            //this function will run after sql statement executes if sql statement fails then error variable will be not null 
            // if sql statement success then result variable be not null 
            if (error != null) {
                console.log(error);
                response.status(500).json([{ 'error': 'Internal server error' }]);
            }
            else {
                // no error
                response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'category inserted' }])
            }
        });
    }

});

app.put(CATEGORY, function (request, response) {
    response.send('update request received');
});
//curl -X DELETE http://localhost:5000/category -H "Content-Type: application/x-www-form-urlencoded" -d "categoryid=123"
app.delete(CATEGORY, function (request, response) {
    const categoryid = request.body.categoryid;
    if (categoryid === undefined) {
        response.json([{ 'error': 'input missing' }])
    }
    else {
        // ? is called placeholder/parameter
        const sql = "delete from category where id=?";
        const data = [categoryid];
        connection.con.query(sql,data,function (error, result) {
            if (error != null) {
                console.log(error)
                response.status(500).json([{ 'error': 'Internal server error' }]);
            }
            else {
                response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'category deleted' }])
            }
        });
    }


});

app.listen(5000);
console.log('ready to accept request')


const express = require('express');
const connection = require('./connection.js');
var bodyParser = require('body-parser');

var app = express();

app.use(express.urlencoded({ 'extended': true }));
app.use(bodyParser.json());

const CATEGORY = "/category"; //route path/api address 
/*
    localhost:5000/category
    or 
    localhost:5000/category/50
    or 
    localhost:5000/category/50/name
*/
app.get(`${CATEGORY}{/:start}{/:field}`, function (request, response) {
    // select 25 rows from category table in descending order of id
    let start;
    if (request.params.start !== undefined)
        start = parseInt(request.params.start);
    else
        start = 0;

    let field;
    if (request.params.field !== undefined) {
        field = request.params.field
    }
    else {
        field = 'id';
    }
    var sql = `select * from category order by ${field} desc limit ?,25`;
    var data = [start]
    console.log(start,field);
    connection.con.query(sql, data, function (error, result, fields) {
        if (error != null) {
            console.log(error);
            response.json([{ 'error': 'oops something went wrong, please try after sometimes' }])
        }
        else {
            res = []; //empty list 
            res.push({ 'error': 'no' }); //0th position
            res.push({ 'total': result.length }) //1st position
            res.push(result) //last result
            response.json(res);
        }

    });
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
        connection.con.query(sql, data, function (error, result) {
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


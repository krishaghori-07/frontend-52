//database connection import
const connection = require('./connection')
//import express 
const express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.urlencoded({ 'extended': true }));
app.use(bodyParser.json());
const USERS = "/users"

//create route for register 
// input : email mobile, password, 
app.post(USERS + "/register", function (request, response) {

    //create variable and store input spplied in api
    let email = request.body.email;
    let mobile = request.body.mobile;
    let password = request.body.password;

    sql = "insert into users (email,mobile,password) values (?,?,?)";
    values = [email,mobile,password];
    connection.con.query(sql,values, function (error, result) {
        if (error != null) {
            console.log(error);
             response.status(500).json([{ 'error': 'oops something went wrong' }])
        }
        else {
            // no error
            response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'registered successfully' }])
        }
    });
});

//create route for login 
// input : email, password, 
app.post(USERS + "/login", function (request, response) {
    response.send("post request received");
});

//create route for change password
// input : id, old_password, new_password
app.post(USERS + "/change_password", function (request, response) {
    response.send("post request received");
});

//create route for forgot password 
// input : email
app.post(USERS + "/forgot_password", function (request, response) {
    response.send("post request received");
});

app.listen(5000);
console.log('ready to accept request.');

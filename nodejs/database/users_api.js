//database connection import
const connection = require('./connection')
const security = require('./security');

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

    if (email === undefined || mobile === undefined || password === undefined) {
        response.json([{ 'error': 'input missing' }]);
    }
    sql = "insert into users (email,mobile,password) values (?,?,?)";
    // password hash
    let pwd = new security.PasswordManager();
    pwd.getHashPassword(password).then((HashedPassword) => {

        values = [email, mobile, HashedPassword];

        connection.con.query(sql, values, function (error, result) {
            if (error != null) {
                console.log(error);
                if (error.errno === 1062) {
                    response.json([{ 'error': 'either email and/or mobile is already registered with us, please use different email/mobile ' }])
                }
                else {
                    response.status(500).json([{ 'error': 'oops something went wrong' }])
                }
            }
            else {
                // no error
                response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'registered successfully' }])
            }
        });
    });

});

//create route for login 
// input : email, password, 
app.post(USERS + "/login", function (request, response) {
    var sql = "select id,password from users where email=?";
    let data = ['krisha@gmail.com']
    connection.con.query(sql, data, function (error, result, fields) {
        if (error != null) {
            console.log(error);
            response.status(500).json([{ 'error': 'oops something went wrong' }])
        }

        else {
            //fetch password from database
            let HashedPassword = result[0]['password'];
            let PlainTextPassword = 'apple';
            console.log(HashedPassword);
            let pwd = new security.PasswordManager();
            pwd.comparePassword(PlainTextPassword, HashedPassword).then((isMatched) => {
                if (isMatched == false) {
                    response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'login successful' }])

                }
                else {
                    response.json([{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'failed login attempt' }])

                }
            })
        }

    });

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

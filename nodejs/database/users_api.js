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
    let email = request.body.email;
    let password = request.body.password;
    if (email === undefined || password === undefined) {
        response.json([{ 'error': 'input missing' }])
    }
    else {
        var sql = "select id,password from users where email=?";
        let data = [email]
        connection.con.query(sql, data, function (error, result, fields) {
            if (error != null) {
                console.log(error);
                response.status(500).json([{ 'error': 'oops something went wrong' }])
            }

            else {
                //fetch password from database
                let HashedPassword = result[0]['password'];
                let PlainTextPassword = password
                console.log(HashedPassword);
                let pwd = new security.PasswordManager();
                pwd.comparePassword(PlainTextPassword, HashedPassword).then((isMatched) => {
                    console.log(isMatched);
                    if (isMatched == true) {

                        response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'login successful' }, { 'id': result[0]['id'] }])

                    }
                    else {
                        response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'login successful' }, { 'id': result[0]['id'] }])

                    }
                })
            }

        });
    }


});

//create route for change password
// input : id, old_password, new_password
app.post(USERS + "/change_password", function (request, response) {

    let id = request.body.id;
    let NewPassword = request.body.new_password;
    let OldPassword = request.body.old_password;

    if (id === undefined || NewPassword === undefined || OldPassword === undefined) {
        response.json([{ 'error': 'input missing' }]);
    }
    else {

        let pwd = new security.PasswordManager();

        //check id and password match or not 
        var sql = "select password from users where id=?";
        var data = [id];
        connection.con.query(sql, id, function (error, result, fields) {
            if (error != null) {
                console.log(error)
                response.status(500).json([{ 'error': 'oops something went wrong' }])
            }
            else {
                // console.log(result); //list of objects 
                let size = result.length;
                if (size === 0) {
                    response.json([{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'password changed attempt failed' }])

                }
                else {
                    let HashedPassword = result[0]['password'];
                    pwd.comparePassword(OldPassword, HashedPassword).then((isMatched) => {
                        if (isMatched === false) {
                            //password mismatch
                            response.json([{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'invalid password' }])
                        }
                        else {
                            //hash new password
                            pwd.getHashPassword(NewPassword).then((NewHashedPassword) => {
                                //update users table with new hashed password
                                sql = "update users set password=? where id = ?";
                                data = [NewHashedPassword, id]
                                connection.con.query(sql, data, function (error, result) {
                                    if (error != null) {
                                        response.status(500).json([{ 'error': 'oops something went wrong' }])
                                    }
                                    else {
                                        response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'password changed successfully' }])
                                    }
                                });
                            });
                        }
                    });
                }
            }

        });

    }
});

//create route for forgot password 
// input : email
app.post(USERS + "/forgot_password", function (request, response) {
    // check email address exists or not
    // if email exists, 
    var email = request.body.email;
    if (email === undefined) {
        response.json([{ 'error': 'input missing' }]);
    }
    else {
        var sql = "select * from users where email = ?";
        data = [email]
        connection.con.query(sql, data, function (error, result, fields) {
            if (error != null) {
                console.log(error)
                response.status(500).json([{ 'error': 'oops something went wrong' }])
            }
            else {
                //      generate new random  password, 
                let pwd = new security.PasswordManager();
                var NewPassword = pwd.generateRandomPassword();
                console.log(NewPassword);
                //      hash password
                pwd.getHashPassword(NewPassword).then((HashedPassword) => {
                    //      update password in table 
                    var sql = "update users set password=? where email=?";
                    var data = [HashedPassword, email]
                    connection.con.query(sql, data, function (error, result) {
                        if (error != null) {
                            console.log(error);
                            response.status(500).json([{ 'error': 'oops something went wrong' }])
                        }
                        else {
                            response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'password recovered successfully check your email account for new password' }]);
                            // send original password as email to user 
                            const mailer = require('./gmaildemo.js');
                            subject = "password recovery email"
                            message = "Congratulation, we have generated new password <br/> your new password is " + NewPassword;

                            mailer.sendEmail(email, subject, message);

                        }
                    });


                });
            }

        });
    }

});

app.listen(5000);
console.log('ready to accept request.');

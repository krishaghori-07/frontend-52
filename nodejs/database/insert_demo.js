// load connection file
var connection = require('./connection');

// create sql statement for insert operation 
sql = "insert into category (name,detail,photo) values ('XYZ','xyz detail','photo2.jpg')";

// run sql statement
connection.con.query(sql,function(error,result){
    //this function will run after sql statement executes if sql statement fails then error variable will be not null 
    // if sql statement success then result variable be not null 
    if(error !=null)
    {
        console.log(error);
    }
    else 
    {
        // no error
        console.log("category inserted successfully");
    }
});

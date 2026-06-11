// import module
var mysql = require('mysql')

// create object that has connection detail
var config = {
    host :'localhost',
    user: 'root',
    password :'',
    port : 3306,
    database:'frontend52'
};
//create connection object 
var con = mysql.createConnection(config);

//start connection
con.connect(function(error){
    //function will run after connection is failed or successful 
    if(error != null)
    {
        //if connection is failed error will be not null
        console.log(error)
    }
    else 
    {
        console.log('connection created successfully');
    }
});
// this is required then only we can use con object in other javascript file 
module.exports.con = con 
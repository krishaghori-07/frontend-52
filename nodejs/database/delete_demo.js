var connection = require('./connection');

var sql = "delete from category where id=1";

connection.con.query(sql, function (error, result) {
    if (error != null) {
        console.log(error)
    }
    else {
        console.log("delete operation successful");
    }
});


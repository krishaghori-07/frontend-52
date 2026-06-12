var connection = require('./connection');

var sql = "update category set name='efg',detail='efg detail',photo='no-photo.jpg' where id=1";

connection.con.query(sql, function (error, result) {
    if (error != null) {
        console.log(error)
    }
    else {
        console.log("update operation successful");
    }
});


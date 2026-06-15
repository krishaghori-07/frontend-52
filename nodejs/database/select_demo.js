var connection = require('./connection');
var sql = "select * from category order by name limit 0,25";
connection.con.query(sql,function (error, result,fields) 
{
    if (error != null) {
        console.log(error)
    }
    else 
    {
        // console.log(result); //list of objects 
        let size = result.length; // 196
       
        for(var index=0;index<size;index++)
        {
            console.log(result[index]['id'],result[index]['name']); //list of objects 
        }
         console.log(size);
    }
    
});


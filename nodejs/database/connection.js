// connection.js
import mysql from 'mysql';

const config = {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'frontend52'
};

// Create connection
const con = mysql.createConnection(config);

// Connect
con.connect(function (error) {
    if (error) {
        console.log('Database connection failed:', error);
    } else {
        console.log('✅ Database connection created successfully');
    }
});

// Export
export { con };
// db.js
require('dotenv').config();
const mysql = require('mysql');
// const {initialiseDatabaseTables } = require('./tableCreations');

// Create a connection  
const mysqlConection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'inter_college_sport',
    password: process.env.PASSWORD,
    connectionLimit: 20,
});


// Connect to the database
mysqlConection.connect((err) => {
    if (!err) {
        console.log('DB connected successfully');
        
        
    } else {
        console.error('DB connection failed:', err);
    }
})

// initialiseDatabaseTables(mysqlConection)

module.exports = mysqlConection;

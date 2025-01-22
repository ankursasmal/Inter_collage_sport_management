const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'inter_college_sport',
    password: process.env.PASSWORD,
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting in User.js:', err);
    } else {
        console.log('Connection in User.js successful');
    }
});

module.exports = connection;

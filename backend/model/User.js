const mysqlPool = require('../controllers/Connection'); // Ensure correct path

// Define table schema
const User = `
CREATE TABLE IF NOT EXISTS User (
    reg_id INT AUTO_INCREMENT PRIMARY KEY,
    role VARCHAR(10),
    name VARCHAR(100),
    age INT,
    gender VARCHAR(20),
    password VARCHAR(255),
    cpassword VARCHAR(255),
    collage_name VARCHAR(150),
    dept VARCHAR(60),
    phone_no BIGINT UNIQUE,
    email VARCHAR(100) UNIQUE,
    image VARCHAR(5000),
    type VARCHAR(30),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP


);
`;

// Create the table
mysqlPool.query(User, (err, results) => {
    if (err) {
        console.error('Error creating User table:', err);
    } else {
        console.log('User table created successfully:', results);
    }
});

module.exports = User;

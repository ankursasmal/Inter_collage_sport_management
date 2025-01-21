const mysqlConection = require('../controllers/Connection'); // Ensure correct path
 
  // Define table schema
        const User = `
        CREATE TABLE IF NOT EXISTS User (
    reg_id INT AUTO_INCREMENT PRIMARY KEY,
    role VARCHAR(10),
    name VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    gender VARCHAR(20) NOT NULL,
    password VARCHAR(20) NOT NULL,
    cpassword VARCHAR(20) NOT NULL,
    collage_name VARCHAR(150),
    dept VARCHAR(60),
    phone_no BIGINT UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    image VARCHAR(5000),
    type VARCHAR(30) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`;



// Check and establish connection
mysqlConection.connect((err) => {
    if (err) {
        console.error('DB not connected successfully:', err);
    } else {
        console.log('DB connected successfully');
 
        // Execute the query to create the table
        mysqlConnection.query(User, (err, results) => {
            if (err) {
                console.error('Error creating students table:', err);
            } 
            else {
                console.log('Students table created successfully:', results);
            }
        });
    }
});

 module.exports=User
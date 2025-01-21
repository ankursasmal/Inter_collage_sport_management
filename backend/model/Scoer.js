 

const mysqlConection = require('../controllers/Connection'); // Ensure correct path

const Score = `
    CREATE TABLE IF NOT EXISTS Score (
        id INT PRIMARY KEY,
        sport_name VARCHAR(50) NOT NULL
    );
`;

mysqlConection.query(Score, (err, result) => {
    if (err) {
        console.error('Error creating Scores table:', err.message);
    } else {
        console.log('Scores table created successfully.');
    }
});

module.exports = Score; // Export the query if needed

const mysqlConection = require('../controllers/Connection');
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    try {
        // Retrieve the token from cookies
        const token = req.cookies.jwt;

        if (!token) {
            return res.status(401).json({
                mess: 'Authentication token missing',
                success: false,
                error: true,
            });
        }

        // Verify the token
        const verifiedUser = jwt.verify(token, '3y2yxhx829299292hc2rhh9h2rhcj9j2rj9r9rj92');

        // Query to get the user data
        const sql = `SELECT * FROM User WHERE reg_id = ?`;

        mysqlConection.query(sql, [verifiedUser.reg_id], (err, result) => {
            if (err) {
                console.error('Database Error:', err.message);
                return res.status(500).json({
                    mess: 'Database error',
                    success: false,
                    error: true,
                });
            }

            // Check if user exists
            if (result.length === 0) {
                return res.status(404).json({
                    mess: 'User not found',
                    success: false,
                    error: true,
                });
            }

            const user = result[0];

            // Attach user data to the request object
            req.token = token;
            req.role = user.role; // Attach the user's role
            req.user = user; // Attach the entire user data

            next(); // Proceed to the next middleware or route
        });
    } catch (e) {
        console.error('Authentication Error:', e.message || e);

        return res.status(401).json({
            mess: 'Invalid or expired token',
            success: false,
            error: true,
            e: e.message || e,
        });
    }
};

module.exports = auth;

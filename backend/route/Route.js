require('dotenv').config();
let express = require('express');
let rout = express.Router();
let mysqlConection = require('../controllers/Connection');
const Score = require('../model/Scoer');
let jwt=require('jsonwebtoken');
let cookie=require('cookie-parser');
let bcrypt=require('bcryptjs');
const User = require('../model/User');
const auth = require('../middleware/auth');
  // const { createPlayer } = require('../repository/user');
 // let UserTable=require('../model/User')
  rout.use(cookie());

rout.get('/', (req, res) => {

    res.send('home')
})

// craete user info or register
rout.post('/create-user',async(req,res)=>{
    try{
   
        const {  name,age,gender,password,cpassword,collage_name,dept,phone_no,email,image,type}=req.body;
        // console.log(name)

        if(password!==cpassword){
            throw new Error('Fill equal password');
        }
        // Default role
        const Role = 'GENERAL';

        let sql=`  INSERT INTO User (
                  role, name, age, gender, password, cpassword, collage_name, dept, phone_no, email, image, type
            ) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        let BcryptPassword=await bcrypt.hash(password,10)
        let BcryptCPassword=await bcrypt.hash(cpassword,10)
 
        // Execute query
        mysqlConection.query(
            sql,
            [  Role, name, age, gender, BcryptPassword, BcryptCPassword, collage_name, dept, phone_no, email, image, type],
            (err, result) => {
                if (err) {
                    if (err.code === 'ER_DUP_ENTRY') {
                        return res.status(400).json({ mess: 'Duplicate entry for phone_no or email', success: false, error: true });
                    }
                    console.error('Database Error Details:', err.message);
                    return res.status(500).json({ mess: 'Database error', success: false, error: true });
                }
                res.status(201).json({ mess: 'Registration successful', success: true, error: false, result });
            }
        );
    } catch (err) {
        console.error('Server Error:', err);
        res.status(500).json({ mess: 'Internal server error', success: false, error: true });
    }
});


// craete user info or login
rout.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const sql = `SELECT * FROM User WHERE email = ?`;

        // Execute query
        mysqlConection.query(sql, [email], async (err, result) => {
            if (err) {
                console.error('Database Error:', err.message);
                return res.status(500).json({ mess: 'Database error', success: false, error: true });
            }

            if (result.length === 0) {
                // User not found
                return res.status(404).json({ mess: 'User not found', success: false, error: true });
            }

            // Extract user data
            const user = result[0];

            // Compare passwords
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ mess: 'Invalid password', success: false, error: true });
            }

            // Generate JWT
            const token = jwt.sign({ reg_id: user.reg_id }, '3y2yxhx829299292hc2rhh9h2rhcj9j2rj9r9rj92', { expiresIn: '30d' });
console.log(token);

            // Set HTTP-only cookie
            res.cookie('jwt', token, {
                maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
                httpOnly: true,
                secure: true,
            });

            res.status(200).json({ mess: 'Login successful', success: true, error: false, user });
        });
    } catch (err) {
        console.error('Server Error:', err);
        res.status(500).json({ mess: 'Internal server error', success: false, error: true });
    }
});


// get all user detail

rout.get('/all-user' , async (req, res) => {
    try {
        // Extract role from middleware
        // const { role } = req;

        // console.log(`Authenticated Role: ${role}`);

        // Check if the user is authorized
        // if (role !== 'ADMIN') {
        //     return res.status(403).json({
        //         mess: 'User is not authorized to access this resource',
        //         success: false,
        //         error: true,
        //     });
        // }

        // SQL query to fetch all users
        const sql = `SELECT * FROM User`;

        // Execute the query
        mysqlConection.query(sql, [], (err, result) => {
            if (err) {
                console.error('Database Query Error:', err.message);
                return res.status(500).json({
                    mess: 'Failed to retrieve user data',
                    success: false,
                    error: true,
                });
            }
             // console.log(result)
            // Return the successful response
            return res.status(200).json({
                mess: 'Data retrieved successfully',
                success: true,
                error: false,
                result:result
            });
        });
    } catch (e) {
        console.error('Server Error:', e.message || e);
        res.status(500).json({
            mess: 'Internal server error',
            success: false,
            error: true,
            e: e.message || e,
        });
    }
});

// user profile (auth)
rout.get('/profile/:id', async (req, res) => {
    try {
        const { id } = req.params;
        // const { reg_id: userId } = req.user; // Get the authenticated user's ID from the middleware

        // Check if the requested profile ID matches the authenticated user ID
        // if (parseInt(id) !== userId) {
        //     return res.status(403).json({
        //         mess: 'You are not authorized to view this profile',
        //         success: false,
        //         error: true,
        //     });
        // }

        // SQL query to fetch user data based on reg_id
        const sql = `SELECT reg_id, name, age, gender, collage_name, dept, phone_no, email, image, type FROM User WHERE reg_id = ?`;

        // Execute the query
        mysqlConection.query(sql, [id], (err, result) => {
            if (err) {
                console.error('Database Query Error:', err.message);
                return res.status(500).json({
                    mess: 'Failed to retrieve user data',
                    success: false,
                    error: true,
                });
            }

            if (result.length === 0) {
                return res.status(404).json({
                    mess: 'User not found',
                    success: false,
                    error: true,
                });
            }

            // Return the successful response with user data
            return res.status(200).json({
                mess: 'Profile retrieved successfully',
                success: true,
                error: false,
                result: result[0], 
                // Send only the first result (profile data)
            });
        });
    } catch (e) {
        console.error('Server Error:', e.message || e);
        res.status(500).json({
            mess: 'Internal server error',
            success: false,
            error: true,
            e: e.message || e,
        });
    }
});

// remove User BY admin
rout.delete('/delete-user/:id', auth, async (req, res) => {
    try {
        const { id } = req.params;
        // const { role } = req; // Get the role from the middleware

        // Check if the role is ADMIN, only allow admin to delete users
        // if (role !== 'ADMIN') {
        //     return res.status(403).json({
        //         mess: 'You are not authorized to delete a user',
        //         success: false,
        //         error: true,
        //     });
        // }

        // SQL query to check if the user exists before deleting
        const checkSql = `SELECT * FROM User WHERE reg_id = ?`;

        mysqlConection.query(checkSql, [id], (err, result) => {
            if (err) {
                console.error('Database Query Error:', err.message);
                return res.status(500).json({
                    mess: 'Failed to retrieve user data',
                    success: false,
                    error: true,
                });
            }

            if (result.length === 0) {
                return res.status(404).json({
                    mess: 'User not found',
                    success: false,
                    error: true,
                });
            }

            // SQL query to delete the user based on reg_id
            const deleteSql = `DELETE FROM User WHERE reg_id = ?`;

            mysqlConection.query(deleteSql, [id], (err) => {
                if (err) {
                    console.error('Database Deletion Error:', err.message);
                    return res.status(500).json({
                        mess: 'Failed to delete user',
                        success: false,
                        error: true,
                    });
                }

                // Successfully deleted the user
                return res.status(200).json({
                    mess: 'User deleted successfully',
                    success: true,
                    error: false,
                });
            });
        });
    } catch (e) {
        console.error('Server Error:', e.message || e);
        res.status(500).json({
            mess: 'Internal server error',
            success: false,
            error: true,
            e: e.message || e,
        });
    }
});


//  update user profile
rout.put('/update-user/:id', auth, async (req, res) => {
    try {
        const { id } = req.params;
        // const { role } = req; // Get the role from the middleware

        // Check if the role is ADMIN, only allow admin to update user profiles
        // if (role !== 'ADMIN') {
        //     return res.status(403).json({
        //         mess: 'You are not authorized to update user profiles',
        //         success: false,
        //         error: true,
        //     });
        // }

        // Extract the updated user data from the request body
        const { name, email, age, phone_no, image, type } = req.body;

        // Validate input data (optional)
        if (!name || !email || !age || !phone_no || !type) {
            return res.status(400).json({
                mess: 'Please provide all required fields',
                success: false,
                error: true,
            });
        }

        // SQL query to check if the user exists
        const checkSql = `SELECT * FROM User WHERE reg_id = ?`;

        mysqlConection.query(checkSql, [id], (err, result) => {
            if (err) {
                console.error('Database Query Error:', err.message);
                return res.status(500).json({
                    mess: 'Failed to retrieve user data',
                    success: false,
                    error: true,
                });
            }

            // If the user does not exist
            if (result.length === 0) {
                return res.status(404).json({
                    mess: 'User not found',
                    success: false,
                    error: true,
                });
            }

            // SQL query to update the user details
            const updateSql = `
                UPDATE User
                SET name = ?, email = ?, age = ?, phone_no = ?, image = ?, type = ?
                WHERE reg_id = ?
            `;

            mysqlConection.query(updateSql, [name, email, age, phone_no, image, type, id], (err, updateResult) => {
                if (err) {
                    console.error('Database Update Error:', err.message);
                    return res.status(500).json({
                        mess: 'Failed to update user profile',
                        success: false,
                        error: true,
                    });
                }

                // Successfully updated the user profile
                return res.status(200).json({
                    mess: 'User profile updated successfully',
                    success: true,
                    error: false,
                });
            });
        });
    } catch (e) {
        console.error('Server Error:', e.message || e);
        res.status(500).json({
            mess: 'Internal server error',
            success: false,
            error: true,
            e: e.message || e,
        });
    }
});





// // for score table
// rout.post('/create-score', async (req, res) => {
//     try {
//         const { id, sport_name } = req.body; // Destructure the required fields
//         console.log(id)
//         if (!id  || !sport_name) {
//             return res.status(400).json({ error: "Missing required fields: id, name, or sport_name" });
//         }
//          const sql = `INSERT INTO Score (id, sport_name) VALUES (?, ?)`;
//         mysqlConection.query(sql, [id,  sport_name], (err, result) => {
//             if (err) {
//                 console.error('Error inserting value:', err.message); // Log the error
//                 return res.status(500).json({ error: "Failed to insert value into database" });
//             }
//             res.json({ message: "Value inserted successfully", result });
//         });
//     } catch (e) {
//         res.status(500).json({ error: e.toString() });
//     }
// });


// rout.get('/get-user', async (req, res) => {
//     try {
//         await
//             res.json({
//                 "name": "Riu"
//             })
//     } catch (e) {
//         res.json({
//             "error": e.toString()
//         })
//     }
// })
module.exports = rout

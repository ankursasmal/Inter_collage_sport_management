require('dotenv').config();
let express = require('express');
let rout = express.Router();
let mysqlConection = require('../controllers/Connection');
const Score = require('../model/Scoer');
let jwt=require('jsonwebtoken');
let cookie=require('cookie-parser');
let bcrypt=require('bcryptjs');
 // const { createPlayer } = require('../repository/user');
 // let UserTable=require('../model/User')

 rout.use(cookie());

rout.get('/', (req, res) => {

    res.send('home')
})

// craete user info or register
// res.post('/create-user',async(req,res)=>{
//     try{
//         // const {}=req.body;


//     }
//     catch(e){

//     }
// })


// for score table
rout.post('/create-score', async (req, res) => {
    try {
        const { id, sport_name } = req.body; // Destructure the required fields
        console.log(id)
        if (!id  || !sport_name) {
            return res.status(400).json({ error: "Missing required fields: id, name, or sport_name" });
        }
         const sql = `INSERT INTO Score (id, sport_name) VALUES (?, ?)`;
        mysqlConection.query(sql, [id,  sport_name], (err, result) => {
            if (err) {
                console.error('Error inserting value:', err.message); // Log the error
                return res.status(500).json({ error: "Failed to insert value into database" });
            }
            res.json({ message: "Value inserted successfully", result });
        });
    } catch (e) {
        res.status(500).json({ error: e.toString() });
    }
});


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

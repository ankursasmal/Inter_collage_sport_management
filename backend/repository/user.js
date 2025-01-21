// const mysqlConection = require("../controllers/Connection")

// const insertData = (tableName, data) => {
//     return new Promise((resolve, reject) => {
//         const sql = `INSERT INTO ?? SET ?`;
//         mysqlConection.query(sql, [tableName, data], (err, results) => {
//             if (err) {
//                 console.error('Error inserting data:', err.message);
//                 reject(err);
//             } else {
//                 console.log('Data inserted successfully:', results);
//                 resolve(results);
//             }
//         });
//     });
// };


// const createPlayer = ({ data }) => {
//     insertData('user', data)
//         .then((results) => {
//             console.log('Insert successful:', results);
//         })
//         .catch((err) => {
//             console.error('Insert failed:', err.message);
//         })
//         .finally(() => {
//             mysqlConection.end();
//         });
// }

// module.exports = {
//     createPlayer
// }
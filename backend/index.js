require('dotenv').config();
let express=require('express');
const mysqlConection = require('./controllers/Connection');
let router=require('./route/Route')
let app=express();
let jwt=require('jsonwebtoken');
let cookie=require('cookie-parser');
let bcrypt=require('bcryptjs');
let cors=require('cors');

app.use(cors({
        origin: 'http://localhost:3001',  
        methods: ['GET', 'POST', 'PUT', 'DELETE'], 
        allowedHeaders: ['Content-Type', 'Authorization'], 
       credentials: true, 
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookie());
app.use(router);

if(mysqlConection){
app.listen(process.env.PORT,()=>{
    console.log('server start');
})
}
else{
    console.log('db not conect');
}
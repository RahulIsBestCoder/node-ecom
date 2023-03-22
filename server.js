// without cors you cant use axios in front end
const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser')
const cors = require('cors');
const messagesRoute=require('./route/messages');
const userRoute=require('./route/user');
const prodRoute=require('./route/product');
const cartRoute=require('./route/cart');
const authRoute=require('./route/auth');
require("dotenv").config();
const database = mongoose.set('strictQuery', true);
console.log(new Date());
mongoose.connect(process.env.DB);

mongoose.connection.on('error',err=>{
    console.log('connection failed',err); 
});
mongoose.connection.on('connected',connected=>{
    console.log('connection established with data base....');
})
app.use(cors({origin: true, credentials: true}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api/v1',messagesRoute);
app.use('/api/v1',userRoute);
app.use('/api/v1',prodRoute);
app.use('/api/v1',cartRoute);
module.exports=app;
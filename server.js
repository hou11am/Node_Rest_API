const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

app.use(bodyParser.json());
//Import Routes
const postsRoutes = require('./routes/posts'); 

/*Middlewares
app.use('/posts', ()=>{
console.log('Surprise f***!');
});*/

//Routes
app.use('/posts',postsRoutes);
app.use('/',postsRoutes);

//Connect to DB
mongoose
.connect(process.env.DB_CONNECTION)
.then(() => console.log("Connected to db"))
.catch(err => console.log(`Could not Connected to db ${process.env.DB_CONNECTION} `, err));
/*
mongoose.connect(process.env.DB_CONNECTION,()=>{
    console.log('Connected to Databases');
});*/
//How to we start listening to the server
app.listen(3000);
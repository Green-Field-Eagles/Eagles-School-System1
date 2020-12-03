const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const db = require('../database/database.js');
const router = require('./routes')
const app = express();
const bcrypt = require('bcrypt')
require('dotenv').config()
app.use(bodyParser.json())
const postRoute = require('./posts')

app.use('/posts', postRoute);

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/public')));

app.use("/",router.router);


app.get('/',function(req,res){
    res.send('Home Page')
});


app.listen(3001,()=>{
    console.log('server listning in port 3001')

});


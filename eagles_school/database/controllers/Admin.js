var models = require('../models/admin');
var db = require('../database')
const body= require('body-parser');
var app = require('../../server/server')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = {

    getAlladmin:(req,res) =>{
        models.getAlladmin(function(err,results){
           
           if (err) { console.log('error in myAdmin controller',err)}
           res.json(results);
       
        })
       },

       createadmin : async function(req, res){

        const {adminName, adminpassword} = req.body
        const hash =  await bcrypt.hash(adminpassword, 15,async function(err,hash){
            if(err){console.log('not hashed')}
            else{
                const params = [adminName, hash]
                await models.createadmin(params,function(err, results) {
                    if (err) { console.log("error post at student controller",err) }
                    res.sendStatus(200)
                    console.log(hash);

                  });
            }
        })
       
     },

       
      deleteOneadmin: function(req,res){

        var params = [req.params.id];
        models.deleteOneadmin(params,function(err,results){
            if(err){
                console.log("error delete at admin controller",err)
            }
            res.send('admin deleted')
        })



      },

      getOneadmin : function(req,res){
        var params = [req.params.id];
        models.getOneadmin(params,function(err,results){
            if(err){
                console.log("error getone at admin controller",err)
            }
            res.send(results)
        });

      },

      login : (req,res ) => {
        // var params = [req.body.username, req.body.adminpassword];
        const username = req.body.username;
        const password = req.body.adminpassword;
        // const user = {username: req.body.username, password: req.body.adminpassword}

        const token = jwt.sign(username, `${process.env.JWT_KEY}`)
        res.header('auth-token', token).send(token);
        
         models.findOne(username, function (err, results) {
           if(err) {
             console.log("error at hashed")
            //  console.log(req.body)
           }
           
           var hash = results[0].hash
           console.log(hash);
           try{
             if( bcrypt.compare(password, hash)) {
             res.send("success")
            
             res.send(token)
           }else{
            res.send("not allowed")
           }
           }catch{
             res.status(500).send()
           }
         });
      }

      
      }
     


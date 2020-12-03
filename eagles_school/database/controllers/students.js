var models = require('../models/students');
var db = require('../database')
const body= require('body-parser');
var app = require('../../server/server')

  
//controllers for each method

module.exports = {
 // get all data from student

    getAll:(req,res) =>{
        models.getAll(function(err,results){
           
           if (err) { console.log('error in student controller',err)}
           res.json(results);
       
        })
       },

  //Create new student
       create: function (req, res) {
          
        //    console.log(req.body,'req.body')
        var params =[req.body.studentName,req.body.studentpassword];
        console.log(req.body.studentName,"create")
        models.create(params, function(err, results) {
          if (err) { console.log("error post at student controller",err) }
          res.sendStatus(200)
          
        });
      },
       
    //Delete one student
      deleteOne: function(req,res){

        var params = [req.params.id];
        models.deleteOne(params,function(err,results){
            if(err){
                console.log("error delete at student controller",err)
            }
            res.send('student deleted')
        })



      },
    
      //retrieve one
      getOne : function(req,res){
        var params = [req.params.id];
        models.getOne(params,function(err,results){
            if(err){
                console.log("error getone at student controller",err)
            }
            res.send(results)
        });

      },

     

       
} 
     
   
 



  
    
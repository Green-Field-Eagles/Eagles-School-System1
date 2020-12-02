var models = require('../models/admin');
var db = require('../database')
const body= require('body-parser');
var app = require('../../server/server')

  


module.exports = {

    getAlladmin:(req,res) =>{
        models.getAlladmin(function(err,results){
           
           if (err) { console.log('error in myAdmin controller',err)}
           res.json(results);
       
        })
       },

       createadmin: function (req, res) {
          
        //    console.log(req.body,'req.body')
        var params =[req.body.adminName,req.body.adminpassword];
        console.log(req.body.adminName,"create")
        models.createadmin(params, function(err, results) {
          if (err) { console.log("error post at admin controller",err) }
          res.sendStatus(200)
          
        });
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

       
} 
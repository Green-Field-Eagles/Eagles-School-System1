var db = require('../database');
var routs = require('../../server/routes');

module.exports= {
    getAll:(callback)=>{
        var queryStr = 'SELECT * FROM \
         students ';

        db.query(queryStr,function(err,result){
            callback(err,result)
        });
    
    },

    create:(params,callback) =>{
        var queryStr = `insert into students(studentName,studentPassword) values (?,?)`;
         db.query(queryStr,params,function(err,results){
             callback(err,results)
         });
    },

    deleteOne:(params,callback) =>{
        var queryStr = `delete from students where studentId= ?`;
        db.query(queryStr,params,function(err,results){
           callback(err,results)
        });
    },

    getOne:(params,callback) =>{
        var queryStr = `select * from students  where studentId= ?`;
        db.query(queryStr,params,function(err,results){
            callback(err,results)
        });
    }

    
    };
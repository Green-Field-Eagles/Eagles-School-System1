const model = require('../models/marks');
// const body= require('body-parser');
// var app = require('../../server/server')
module.exports = {
    createMark:(req , res)=>{
        params = [req.body.mark , req.body.student_Id , req.body.markType , req.body.subjectId];
        model.createMark(params , function(err , result){
            if(err){console.log("error : " , err)}
            res.sendStatus(200);
            console.log(req.body)
        })
    },
    getMarks:(req,res) =>{
        params =[req.params.id];
        model.getMarks(params , function(err , results){
            if(err) console.log("error :" , err)
         res.send(results);
        })
    }
}
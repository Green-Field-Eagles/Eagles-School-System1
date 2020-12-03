const models = require('../models/subjects');
const db = require('../database');
const body= require('body-parser');
const app = require('../../server/server');
module.exports = {
   getAllsubjects: (req, res)=> {
    models.getAllsubjects(function(err, results) {
        if (err) {console.log("error at subjects controller", err )}
        res.json(results);
    })
   },
    createsubject: function(req, res) {
        const params = [req.body.subjectName, req.body.student_Id];
        console.log(req.body.subjectName,"create");
        models.createsubject(params, function(err,results) {
            if (err) { console.log("error post at subjects controller",err) }
            res.sendStatus(200)
        });
    },
    deleteOnesubject: function(req, res) {
        const params = [req.params.id];
        models.deleteOnesubject(params, function(err,results){
            if (err) {console.log("error deletesubject at subjects controller",err)}
            res.send('subject deleted')
        })
    },
    getOnesubject: function(req, res) {
        const params = [req.params.id];
        models.getOnesubject(params, function(err, results) {
            if (err) {console.log("error getonesubject at subjects controller",err)}
            res.send(results); // whether we use send or json it is the same
            console.log(results)
        });
    }
}
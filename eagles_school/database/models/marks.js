var db = require('../database');
// to export all module to use it in controller 
module.exports = {
    // create new mark
    createMark:(params,callback)=>{
        //insert mark query 
        var queryStr = `INSERT INTO marks (mark , student_Id , markType , subjectId ) VALUES (?,?,?,?)`;
        db.query(queryStr , params,function(err,result){
            callback(err,result)
        })
    },
    getMarks:(params,callback)=>{
        var queryStr = `SELECT marks.mark , subjects.subjectName ,marks.markType , students.studentName FROM marks  INNER JOIN subjects ON marks.subjectId=subjects.subjectId INNER JOIN students ON marks.student_Id = students.studentId WHERE marks.student_Id = ?;`;
        db.query(queryStr ,params, function(err,results){
            callback(err,results)
        })
    }
}
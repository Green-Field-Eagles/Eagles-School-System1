
const controller = require('../database/controllers');
// var students = require('../database/controllers/students');
var router = require('express').Router();
var body = require('body-parser');


/*student's table routes */

router.get('/getAll', controller.students.getAll);
console.log('router');
router.get('/getOne/:id', controller.students.getOne);
router.post('/create', controller.students.create);
router.delete('/deleteOne/:id', controller.students.deleteOne);

/*Admin table routes*/
router.get('/getAlladmin', controller.admin.getAlladmin);
router.get('/getOneadmin/:id', controller.admin.getOneadmin);
router.post('/createadmin', controller.admin.createadmin);
router.delete('/deleteOneadmin/:id', controller.admin.deleteOneadmin);

//mark table routes
router.get('/getMarks/:id' , controller.marks.getMarks)
router.post('/createMark' , controller.marks.createMark);

/*subject's table routes */
router.get('/getAllSubjects', controller.subjects.getAllsubjects);
router.get('/getOnesubject/:id', controller.subjects.getOnesubject);
router.post('/createsubject', controller.subjects.createsubject);
router.delete('/deleteOnesubject/:id', controller.subjects.deleteOnesubject);

//  /*export the routes to the server and controller folder*/
module.exports.router = router;
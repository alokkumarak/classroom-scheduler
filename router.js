const express=require('express');

const router=express.Router();

const TeacherController=require('./controller.js');

const services=require('./services.js')

//services from teacher model
router.get('/',services.HomeRoutes);




//post teachers and Batch data
router.post('/api/teacher',TeacherController.create);

//get all teachers and Batch data
router.get('/',TeacherController.findAll);

//Retrieve a single teachers and Batch data
router.get('/:id',TeacherController.findById);

//update teachers and Batch data with id
router.put('/:id',TeacherController.update);

//delete teachers and Batch data using Id
router.delete('/api/teacher/:id',TeacherController.delete);







module.exports=router;

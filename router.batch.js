const express=require('express');

const router=express.Router();
const BatchController=require('./Batch.controller');

// const services=require('./services.batch.js');

// //services from batch model
// router.get('/',services.Home);


router.post('/',BatchController.create);
router.get('/',BatchController.findAll);
router.get('/:id',BatchController.findById);
router.put('/:id',BatchController.update);
router.delete('/:id',BatchController.delete);



module.exports=router;
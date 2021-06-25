const Teacher=require('./model.js');

//create controller function 
exports.create=function(req,res){
    const new_Teacher=new Teacher(req.body);

    //handle null error
    if(req.body.constructor===Object && Object.keys(req.body).length===0){
        res.status(400).send({error:true,message:"please provide all require field null value error"});
    }
    else{
        Teacher.create(new_Teacher,function(err,teach){
            if(err) res.send(err);
            
            res.set('location','http://localhost:4000')
            res.json({error:false,message:"Teacher Added successfully!",data:teach});
        

        })
    }

}

//find by id controller function
exports.findById=function(req,res){
    Teacher.findById(req.params.id, function(err,teach){
        if(err) res.send(err);
        res.json(teach);
    });
};

// find all teacher data
exports.findAll=function(req,res){
    Teacher.findAll(function(err,teacher){
        console.log("controller");
        if(err) res.send(err);

        console.log("response",teacher);
        res.send(teacher);

    })
}



// controller for update function
exports.update=function(req,res){
    if(req.body.constructor===Object && Object.keys(req.body).length===0){

        res.status(400).send({error:true,message:'Please provide all required field'});
    }
    else{
        Teacher.update(req.params.id,new Teacher(req.body),function(err,teacher){
            if(err) res.send(err);

            res.json({error:false,message:'teacher data updated successfully !'});
        });
    }
}

//delete the data from the database
exports.delete=function(req,res){
    Teacher.delete(req.params.id,function(err,teacher){
        if(err) res.send(err);

        // res.send({message:"user deleted successfully"})
         res.json({error:false,message:'Teacher successfully deleted'});
        // res.redirect('index');
    });
}
const Batch=require('./Batch.model.js');

//create controller function 
exports.create=function(req,res){
    const new_Batch=new Batch(req.body);

    //handle null error
    if(req.body.constructor===Object && Object.keys(req.body).length===0){
        res.status(400).send({error:true,message:"please provide all require field null value error"});
    }
    else{
        Batch.create(new_Batch,function(err,Batch){
            if(err) res.send(err);
            
            res.json({error:false,message:"New Batch Added successfully!",data:Batch});
            // alert('New Batch Added Successfully !');

        })
    }

}


//find by id controller function
exports.findById=function(req,res){
    Batch.findById(req.params.id, function(err,batch){
        if(err) res.send(err);
        res.json(batch);
    });
};



// find all teacher data
exports.findAll=function(req,res){
    Batch.findAll(function(err,teacher){
        console.log("controller");
        if(err) res.send(err);

        console.log("response",Batch);
        res.send(Batch);

    })
}


// controller for update function
exports.update=function(req,res){
    if(req.body.constructor===Object && Object.keys(req.body).length===0){

        res.status(400).send({error:true,message:'Please provide all required field'});
    }
    else{
        Batch.update(req.params.id,new Batch(req.body),function(err,batch){
            if(err) res.send(err);

            res.json({error:false,message:'teacher data updated successfully !',data:batch});
        });
    }
}


//delete the data from the database
exports.delete=function(req,res){
    Batch.delete(req.params.id,function(err,teacher){
        if(err) res.send(err);

        res.json({error:false,message:'Teacher successfully deleted'});
    });
}
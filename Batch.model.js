var connection=require('./db.js');


//create a object for batch field
var Batch=function(batch){
    this.teacher_name=batch.teacher_name;
    this.subject=batch.subject;
    this.starting_time=batch.starting_time;
    this.ending_time=batch.ending_time;
}

//create Batch
Batch.create=function(newBatch,result){
    connection.query("INSERT INTO add_batch SET ?",newBatch,function(err,res){
        if(err){
            console.log("error :",err);
            result(err,null);
        }
        else{
            console.log(res.teacher_name);
            result(null,res.teacher_name);
        }
    })
}


//find one
Batch.findById=function(id,result){
    connection.query("SELECT * FROM add_batch WHERE id=?",id,function(err,res){
        if(err){
            console.log("error in finding:",err);
            result(err,null);
        }
        else{
            result(null,res);
        }
    })
}

//find all Teachers data
Batch.findAll=function(result){
    connection.query('SELECT * FROM add_batch',function(err,res){
        if(err){
            console.log("Error:",err);
            result(null,err);
        }
        else{
            console.log("Batches Data :",res);
            result(null,res);
        }
       
    })
}

//update teacher data
Batch.update=function(id,batch,result){
    connection.query("UPDATE add_batch SET teacher_name=?,starting_time=?,ending_time=?,subject=? WHERE id=?",[batch.teacher_name,batch.starting_time,batch.ending_time,batch.subject,id],function(err,res){
      
        if(err){
            console.log("Error: ",err);
            result(null,err);
        }
        else{
            result(null,res);
        }

    })
}


//delete one teacher data per time
Batch.delete=function(id,result){
    connection.query("DELETE FROM add_batch WHERE id=?",[id],function(err,res){
        if(err){
            console.log("Error :",err);
            result(null,err);
        }
        else{
            result(null,res);
        }
    })
}


module.exports=Batch;
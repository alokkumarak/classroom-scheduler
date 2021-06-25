var connection=require('./db.js')

// create a object of that field
var Teacher=function(teacher){
    this.name=teacher.name;
    this.saparate_id=teacher.saparate_id;
    this.sub=teacher.sub;
    this.created_at=new  Date();
};

//create
Teacher.create=function(newTea,result){

    connection.query("INSERT INTO add_data SET ?",newTea,function(err,res){
        if(err){
            console.log("error :",err);
            result(err,null);
        }
        else{
            console.log(res.name);
            result(null,res.name);
            // res.render('index');
        }
    })

}

//find one 
Teacher.findById=function(id,result){
    connection.query("SELECT * FROM add_data WHERE id=?",id,function(err,res){
        if(err){
            console.log("error in finding:",err);
            result(err,null);
        }
        else{
            result(null,res);
            // res.render('index',{print:result});
        }
    })
}

//find all Teachers data
Teacher.findAll=function(result){
    connection.query('SELECT * FROM add_data',function(err,res){
        if(err){
            console.log("Error:",err);
            result(null,err);
        }
        else{
            console.log("Teachers Data :",res);
            result(null,res);

        }
       
    })
}

//update teacher data
Teacher.update=function(id,teacher,result){
    connection.query("UPDATE add_data SET name=?,saparate_id=?,sub=? WHERE id=?",[teacher.name,teacher.saparate_id,teacher.sub,id],function(err,res){
      
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
Teacher.delete=function(id,result){
    connection.query("DELETE FROM add_data WHERE id=?",[id],function(err,res){
        if(err){
            console.log("Error :",err);
            result(null,err);
        }
        else{
            result(null,res);
            
        }
    })
}


module.exports=Teacher;
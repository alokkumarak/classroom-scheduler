const axios=require('axios');
const connection = require('./db');

// var add_teacher={}


exports.HomeRoutes=(req,res)=>{
    connection.query('SELECT * FROM add_batch',function(err,result1){
        connection.query('SELECT * FROM add_data',function(err,result2){
        if(err){
            throw err;
        }
        else{
            res.render('index',{print:result1,display:result2});
        }
    })       
    })

    

}



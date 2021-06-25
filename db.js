const mysql=require('mysql')


//create connection to the database
const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"nodesqlcheck"
});

//check and open the connection
connection.connect(err=>{
    if(err) throw err;

    console.log('mysql database connented successfully');
});

module.exports=connection;
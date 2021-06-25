const express=require('express')
const bodyParser=require('body-parser');
const path=require('path');
const session=require('express-session');
const {v4:uuidv4}=require('uuid');


const TeacherRouter=require('./router.js');
const BatchRouter=require('./router.batch.js');
// const connection = require('./db.js');


const app=express();

const PORT=4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//set the view 
app.set('view engine','ejs');

//static assets
app.use('/static',express.static(path.join(__dirname,'public')));
app.use('/assets',express.static(path.join(__dirname,'public/assets')));

app.use(session({
    secret:uuidv4(),
    resave:false,
    saveUninitialized:true
}))

//now create middlewere and api for the Teacher
app.use('/',TeacherRouter);
//now create middlewere and api for the Batch
app.use('/',BatchRouter);





app.listen(process.env.PORT || PORT,()=>{
    console.log(`app is running on the PORT http://localhost:${PORT}`);
})


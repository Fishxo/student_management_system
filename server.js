// importing packages 
const express = require('express');
const app = express();

//middleware handler
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs')

// declaring routes .js files
const student_with = require('./routes/student_with');
const course_with = require('./routes/course_with_stud');
const stud_with_grade = require('./routes/stud_with_grade');
const admin1 = require('./routes/admin1');

//using those files in routes
app.use('/student',student_with);
app.use('/courses',course_with);
app.use('/student',stud_with_grade);
app.use('/admin',admin1);


//getting urls from browser 
app.get('/',(req,res)=>{
    res.send('<h1>hello world </h1>')

})

app.listen(3000,(req,res)=>{
    console.log('server is on live')
})
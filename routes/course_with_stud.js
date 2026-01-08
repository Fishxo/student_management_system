const express = require('express');
const router = express.Router();

//getting a courses with student fild

router.get('/student',(req,res)=>{
    res.render('course_with_stude')
})

module.exports = router;
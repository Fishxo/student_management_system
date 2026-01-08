const express = require('express');
const router = express.Router();

//getting student_with_course
router.get('/course',(req,res)=>{
    res.render('student_with_course')
})

module.exports = router;
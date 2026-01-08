const express = require('express');
const router = express.Router();

//getting a student with grade page in url
router.get('/grade',(req,res)=>{
    res.render('stud_with_grade')
})

module.exports = router;
const express = require('express');
const router = express.Router();

//getting an admin1 page using url
router.get('/page',(req,res)=>{
    res.render('admin1')
})

module.exports = router;
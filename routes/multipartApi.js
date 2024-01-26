const express = require('express');
const router = express.Router();
const upload=require('../utility/fileUtility');

router.post('/input',upload.single('file'),(req,res)=>{
    console.log(req.file,req.body);
    res.sendStatus(200);
})


module.exports=router;
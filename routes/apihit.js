var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/', async(req,res)=>{
    // axios.get('https://catfact.ninja/breeds?limit=5').then((kucing)=>{
    //     let hasil = "";
    //     for(let result of kucing.data.data){
    //         hasil = hasil + result.country;
    //     }
    //     res.send(hasil)
    // })

    try{
        var kucing = await axios.get('https://catfact.ninja/breeds?limit=5');
        let hasil = "";
        for(let result of kucing.data.data){
            hasil = hasil + result.country;
        }
        res.send(hasil)
    }catch (err){
        console.log(err);
    }
    
})

module.exports = router;
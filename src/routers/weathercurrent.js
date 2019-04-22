const express=require('express');
const axios=require('axios');
const router=express.Router();

router.get('/:city/:country',(req,res)=>{
    const {city,country}=req.params;
    axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=70524de0cb2bf075bed8d2716ac3d222&units=metric`
    ).then(Response=>{
         res.send(Response.data);
    }).catch(err=>{
        res.send(err);
    })
   
})
module.exports=router;
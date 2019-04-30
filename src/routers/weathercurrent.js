const express=require('express');
const axios=require('../axios');
const Weather=require("../model/Weather");
const router=express.Router();
router.get('/:city',(req,res)=>{
    const {city}=req.params;
    // axios.get(
    //     `/weather?q=${city},${country}`
    // ).then(Response=>{
    //      res.send(Response.data);
    // }).catch(err=>{
    //     res.send(err);
    // })
    // axios.get(
    //     `/forecast?q=${city}&cnt=5`
    // ).then(Response=>{
    //     // 取时间
    //     //  res.send(Response.data.list[0].dt_txt.split(" ")[1]);
    //     res.send(Response.data);
    // }).catch(err=>{
    //     res.send(err);
    // })
    Weather.getdata(city).then(Response=>{
         res.send(Response);
    }).catch(err=>{
        res.send(err);
    })
    
})
module.exports=router;
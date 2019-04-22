const express=require('express');
const axios=require('axios');
const app=express();
app.get("/",(req,res)=>{
    res.send("welcome");
});
app.get('/weather/:city/:country',(req,res)=>{
    const {city,country}=req.params;
    axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=70524de0cb2bf075bed8d2716ac3d222&units=metric`
    ).then(Response=>{
         res.send(Response.data);
    }).catch(err=>{
        res.send(err);
    })
   
})
app.listen(3000,()=>{
    console.log("welcome port 3000");
});

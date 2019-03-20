const express=require('express');
const app=express();
app.get("/",(req,res)=>{
    res.send("welcome");
});
app.get('/weather/:cc/:city',(req,res)=>{
    res.send("weather");
})
app.listen(3000,()=>{
    console.log("welcome port 3000");
});

const express=require('express');
const router=require('./router');
const app=express();
app.use("/",router);

app.listen(3000,()=>{
    console.log("welcome port 3000");
});

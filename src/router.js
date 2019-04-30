const express=require('express')
const weathercurrent=require('./routers/weathercurrent');
const router=express.Router();
const access= require('./access');
router.get("/",(req,res)=>{
    res.send("welcome");
 });
router.use('/weather',access,weathercurrent);
module.exports=router;

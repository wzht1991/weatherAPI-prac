const express=require('express')
const weathercurrent=require('./routers/weathercurrent');
const router=express.Router();

router.get("/",(req,res)=>{
    res.send("welcome");
 });
router.use('/weather/current',weathercurrent);
module.exports=router;

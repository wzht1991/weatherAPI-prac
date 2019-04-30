const express=require('express')
const weathercurrent=require('./routers/weathercurrent');
const router=express.Router();
const access= require('./access');
router.get("/",(req,res)=>{
    res.send("welcome");
 });
//  access 整个middle ware 能解决跨域问题 很重要
router.use('/weather',access,weathercurrent);
// router.use('/weather',weathercurrent);
module.exports=router;

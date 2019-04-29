const express=require('express');require('dotenv').config();
const morgan=require('morgan');
const router=require('./router');
const port=process.env.PORT || 3002;
const app=express();
app.use(morgan('dev'));
app.use("/",router);

app.listen(port,()=>{
    console.log(`welcome port ${port}`);
});

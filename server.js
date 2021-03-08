const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const app=express();

//=====import config file============
const { MONG_URL}=require('./config/index.js');

//=====import config file============
let PostRouter=require('./Router/API/profie.js');

mongoose.connect(MONG_URL,{ useNewUrlParser: true , useUnifiedTopology: true } ,(err) => {
    if(err) throw err;
    console.log('MomngoDB Connected')
})


//import bodyParser
app.use(express.json());


//===use routes======
app.use('/apiPost/', PostRouter);

let PORT=8080;
app.listen(PORT,(err)=>{
    console.log(`surver running on ${PORT}`)
})
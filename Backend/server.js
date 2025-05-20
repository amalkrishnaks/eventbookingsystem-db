const express=require('express');
const cors=require('cors');
const env=require( 'dotenv/config');
const app=express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

require('./db');

const routes=require('./routes');
app.use('/api',routes);



app.use('*',(req,res)=>{
    return res.status(404).json({message:"No Page Found"});
})


app.listen(4000,()=>{
    console.log("app is running @ http://localhost:4000/");
})
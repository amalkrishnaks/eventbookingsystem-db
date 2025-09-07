const express=require('express');
const cors=require('cors');
const env=require( 'dotenv/config');
const app=express();
const PORT=process.env.PORT || 4000 ;

// app.use(cors());

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));

app.use(express.json());
app.use(express.static('public'));

require('./db');

const routes=require('./routes');
app.use('/api',routes);



app.use('*',(req,res)=>{
    return res.status(404).json({message:"No Page Found"});
})


app.listen(PORT,()=>{
    console.log(`app is running @ http://localhost:${PORT}/`);
})
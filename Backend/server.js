const express=require('express');
const cors=require('cors');
const env=require( 'dotenv/config');
const app=express();
const PORT=process.env.PORT || 4000 ;

app.use(cors({ origin: '*' }));
// const allowedOrigins = [
//   'http://localhost:4000',
//   'https://eventbookingsystem-db1-amal-krishna-k-s-projects.vercel.app/',
// ];
// app.use(cors({
//   origin: function (origin, callback) {
//     if (!origin || allowedOrigins.includes(origin)) {
//       return callback(null, true);
//     }
//     return callback(new Error('Not allowed by CORS'));
//   },
//   credentials: true,
// }));

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
const mongoose=require('mongoose');

mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log("DB connected"))
.catch((err) => console.error(err));

module.exports=mongoose;
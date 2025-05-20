const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/Event-Booking-DB-3")
.then(() => console.log("DB connected"))
.catch((err) => console.error(err));

module.exports=mongoose;
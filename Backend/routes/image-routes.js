const multer=require('multer');
const express=require('express');



const storage=multer.diskStorage({
    destination:(req,files,cb)=>{
        cb(null,'public/');
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
});

const upload=multer({storage:storage});

const router=express.Router();

router.post('/upload',upload.single('avatar'),(req,res)=>{
    res.status(200).json({url:'http://localhost:4000/'+req.file.originalname});
});

module.exports=router;


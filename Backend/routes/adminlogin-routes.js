const express=require('express');
const {adminLogin}=require('../controllers/admincontoller');

const router=express.Router();

router.post('/adminlogin',adminLogin);
module.exports=router;
const express=require('express');
const post_controller=require('../controllers/post_controller');
const passport=require('passport');
const { authenticate } = require('passport');
const router=express.Router();
console.log('post router its working');

router.post('/create',passport.checkAuthentication,post_controller.create)
router.get('/delete/:id',passport.checkAuthentication,post_controller.delete)

module.exports=router;
//this is main routes 
const express=require('express');


const homepageController=require('../controllers/homepage_controller');

const router=express.Router();

console.log('router loaded');

router.get('/',homepageController.home);
router.use('/user',require('./user'));



module.exports=router;
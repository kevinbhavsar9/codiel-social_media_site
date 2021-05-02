//this is main routes 
// all the request comes here and further divided into subroutes i.e. localhost:8000/ or localhost:8000/xyz/abc 
const express=require('express');


const homepageController=require('../controllers/homepage_controller');

const router=express.Router();

console.log('router loaded');

router.get('/',homepageController.home);
router.get('/about',homepageController.about);

router.use('/user',require('./user'));
router.use('/post',require('./post'));

// for any further routes,access fom here
// router.use('/routerName',require('./routerfile'));



module.exports=router;
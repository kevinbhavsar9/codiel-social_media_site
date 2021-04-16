const express=require('express');
const userController=require('../controllers/user_controller');


const router=express.Router();


console.log('its working');

router.get('/profile',userController.profile);
router.get('/',userController.user);
router.get('/message',userController.message);
router.get('/feed',userController.feed);
router.get('/login',userController.login);
router.get('/signup',userController.signup);

module.exports=router;
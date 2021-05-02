
const express=require('express');
const userController=require('../controllers/user_controller');
const passport=require('passport');
const { authenticate } = require('passport');

const router=express.Router();


console.log('its working');

router.get('/profile',passport.checkAuthentication,userController.profile);
router.get('/',userController.user);
router.get('/message',userController.message);
router.get('/feed',userController.feed);
router.get('/login',userController.login);
router.get('/signup',userController.signup);
router.post('/signupdata',userController.signupData);
// use passport as middleware to authenticate
router.post('/logindata',passport.authenticate('local',{failureRedirect:'/user/login'}),userController.loginData);
router.get('/signout',userController.destroySession);


module.exports=router;
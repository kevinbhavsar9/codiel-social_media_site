const express=require('express');
const router=express.Router();
const comment_controller=require('../controllers/comment_controller');


router.post('/create',comment_controller.create);
router.get('/delete/:id',comment_controller.delete);











module.exports=router;
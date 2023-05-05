const express =require('express');// by this we use express
const router =express.Router();// by this we are calling router from express.
const authControllers =require("../controllers/auth/authControllers");

const Joi =require('joi');// to check if the correct data is been sent
const validator =require('express-joi-validation').createValidator({});//joi package is working with express server but to make that working we need to get our validator
// now we can create that validation schema for every request depends if we would like to just validate any request
const auth =require('../middleware/auth');

const registerSchema =Joi.object({
    username: Joi.string().min(3).max(12).required(),
    password: Joi.string().min(6).max(12).required(),
    mail: Joi.string().email().required(),
})

const loginSchema =Joi.object({
    password: Joi.string().min(6).max(12).required(),
    mail: Joi.string().email().required(),
})

router.post("/register",validator.body(registerSchema),authControllers.controllers.postRegister);
router.post("/login",validator.body(loginSchema),authControllers.controllers.postLogin);// this is our second router which is login.


//test route to verify if our middleware is working
router.get('/test',auth,(req,res) => {
    res.send("request passed");
});


module.exports = router;//used to export the router
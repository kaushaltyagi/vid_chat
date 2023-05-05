
const User =require("../../models/user");
const bcrypt =require("bcryptjs");
const jwt =require('jsonwebtoken');
const postRegister = async (req,res) =>{ // we add async because we add some operation with database that will need to wait for them. 

    //logic to create new register account
    try{
        const { username, mail, password } =req.body;
        //check if user exists
        const userExists =await User.exists({ mail:mail.toLowerCase() });

        if(userExists){
            return res.status(409).send('E-mail already is use.');//409 is for conflict occured
        }

        // encrypt password
        const encryptedPassword =await bcrypt.hash(password, 10);//10 descride how many character are added in the passwor din the database.

        //create user document and save it in database.
        const user =await User.create({
            username,
            mail: mail.toLowerCase(),
            password:encryptedPassword
        });

        //create JWT token
        const token =jwt.sign(
            {
                userId:user._id,
                mail
            },
            // then we pass the secret message that helps to decode the token
            process.env.TOKEN_KEY,
            {
                expiresIn :'24h',
            }


        );
        res.status(201).json({
            userDetails:{
                mail:user.mail,
                token:token,
                username:user.username,
                _id: user._id,
            }
        })
    }catch(err){

     return res.status(500).send("Error occurred.Please try again");
    }
};

module.exports = postRegister;
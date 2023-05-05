
const User = require("../../models/user");
const bcrypt =require("bcryptjs");
const jwt =require("jsonwebtoken");

const postLogin = async (req,res) =>{ // we add async because we add some operation with database that will need to wait for them. 
    try{
        const{ mail,password } =req.body;

        const user =await User.findOne({mail:mail.toLowerCase()});

        if(user && (await bcrypt.compare(password,user.password))){
            //send new token
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
            return res.status(200).json({ //this is a response object
                userDetails: {
                    mail:user.mail,
                    token: token,
                    username: user.username,
                    _id: user._id,
                },
            });
        }

        return res.status(400).send("Invalid credentials.Please try again")//400 is for not found
    }catch(err){
        return res.status(500).send('Something is went wrong.Please try again');
    }//500 is for internal server error
};

module.exports = postLogin;

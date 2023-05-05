const jwt=require('jsonwebtoken');

const config =process.env;

const verifyToken =(req,res,next) => {
    let token =req.body.token || req.query.token || req.headers['authorization'];

    if(!token){
        return res.status(403).send('A token is required for authentication');//403 means forbidden
    }
    try{
        token =token.replace(/^Bearer\s+/, "") // means we would like to remove 'bearer' keyword to one space just as a empty string
        const decoded=jwt.verify(token,config.TOKEN_KEY);
        req.user =decoded;

    }catch(err){// if error occured we return the response to user
        return res.status(401).send('Invalid token');

    }
    return next();// if everything okay then we write to make that request to go next step;
};
module.exports =verifyToken; // now export the verify function which we have created.

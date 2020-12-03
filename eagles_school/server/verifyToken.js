const jwt  = require('jsonwebtoken');
require('dotenv').config()

module.exports = function(req, res, next) {
    const token = req.header('auth-token');
    
    if(!token)
    return res.status(401).send('access denied');
    try{
           const verified = jwt.verify(token,`${process.env.JWT_KEY}`);
           console.log(verified);
           console.log('hiiiiiiiiii')
           username = verified;
           next();
            
       }catch(err){
            res.status(400).send('invalid token')
            // console.log(err);
       }
     
}

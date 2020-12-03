const router = require('express').Router();
const verifyToken = require('./verifyToken');


router.get('/',verifyToken, (req, res)=>{
    res.json({posts : {
        title : 'you got in ',
        description : 'random data shouldnt access'
    }})
})





module.exports = router;

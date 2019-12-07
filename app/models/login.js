const jwt = require('jsonwebtoken');
const userModel = require('../../config/database');


let authUser = (id, cb) => {
    cb(jwt.sign({ id }, process.env.SECRET));
}

const user = userModel;

module.exports.userLogin = function (email, pass, cb){
    user.findOne({'user': email}, (err, userData)=>{
        if(err) cb(null);
        userData = userData.toJSON()
        if(pass === userData.pass && pass){
            authUser(userData._id, (token)=>{
                cb(token)
            })
        }else{
            cb(null);
        }
    })
}

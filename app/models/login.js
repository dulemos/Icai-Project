const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');


let userModel = (app, req, res)=>{
    mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});
    
    // let db = dbConnection;
    let Schema = mongoose.Schema;
    
    const userSchema = new Schema({
        user: {
            usuario: String,
            email: String, 
            senha: String
        }
    });
    userSchema.set('autoIndex', false)
    userSchema.set('toJSON', {virtuals: true})
    return mongoose.model('users', userSchema)
}

let authUser = (id, cb) => {
    cb(jwt.sign({ id }, process.env.SECRET));
}

const user = userModel();

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


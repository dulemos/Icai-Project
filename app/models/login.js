const mongoose = require('mongoose');

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
    return mongoose.model('users', userSchema)
}

const user = userModel();

module.exports.userLogin = async function (email){
    user.find({'email': login}, (err, userData)=>{
        console.log(`error: ${err}`)
        console.log(`userData: ${userData}`)
        if(err) return null; 
        return userData
    })
}
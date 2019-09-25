const mongoose = require('mongoose');

userModel = ()=>{
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

module.exports = userModel();
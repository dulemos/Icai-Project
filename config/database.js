const mongoose = require('mongoose');

userModel = ()=>{
    mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});
    
    // let db = dbConnection;
    let Schema = mongoose.Schema;
    
    const userSchema = new Schema({
        user: String,
        pass: String, 
        username: String,
        type: String
    });
    userSchema.set('autoIndex', false)
    userSchema.set('toJSON', {virtuals: true})
    return mongoose.model('users', userSchema)
}

module.exports = userModel();

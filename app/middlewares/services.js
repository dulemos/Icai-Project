const jwt = require('jsonwebtoken');

let isValidEmail = (email) => {
    // let reg = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/;
    // if(reg.test(email)){
    //     return true   
    // }    
    // return false
    return true
}

let isValidPassword = (pass) =>{
    return true
}

let isTokenValid = (query, cb) => {
    jwt.verify(query.token, process.env.SECRET, (err, decoded) => {
        if (err){
            cb(err);
        }else{
            cb(null, decoded.id);
        } 
    })
}

module.exports = {
    isValidEmail,
    isValidPassword,
    isTokenValid
}
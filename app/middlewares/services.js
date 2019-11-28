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

let isTokenValid = async (query) => {
    if(!query.token) return false
    try{
        let isValid = jwt.verify(query.token, process.env.SECRET)
        console.log(isValid)
        return true
    }catch(err){
        return false
    }
}

module.exports = {
    isValidEmail,
    isValidPassword,
    isTokenValid
}
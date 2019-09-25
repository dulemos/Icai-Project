module.exports.isValidEmail = (email) => {
    let reg = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/;
    if(reg.test(email)){
        return true   
    }    
    return false
}

module.exports.isValidPassword = (pass) =>{
    return true
}
module.exports.login = (app, req, res) =>  {
    if(isValidEmail(req)){
        let loginModel = app.models.login.userLogin(app, req, res)
        
        
        
        // console.log(loginModel)
        // if(loginModel){
        //     res.status(200).json(loginModel)
        // }else{
        //     res.status(404).json({"error": "Usuário não encontrado"})
        // }
    };
}

let isValidEmail = (email) => {
    let reg = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/;
    if(reg.test(email.body.email)){
        return true   
    }    
    return false
}
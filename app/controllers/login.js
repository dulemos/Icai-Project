module.exports.login = (app, req, res) =>  {
    if(isValidEmail(req.body.email)){
        let loginModel = app.models.login.userLogin( req.body.email, req.body.password, (token)=>{
            if(token){
                res.json({"token": token})
            } else {
                res.status(404).json({
                    "status": "not found", 
                    "error": "Usuário não encontrado"
                })
            }
        })
    };
}

let isValidEmail = (email) => {
    let reg = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/;
    if(reg.test(email)){
        return true   
    }    
    return false
}
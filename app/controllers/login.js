module.exports.login = (app, req, res) =>  {
    if(app.middlewares.login.isValidEmail(req.body.email)){
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


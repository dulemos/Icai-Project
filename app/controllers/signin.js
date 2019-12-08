module.exports.signinController = (req, res, app) => {
    if(app.middlewares.services.isValidEmail(req.body.user) && app.middlewares.services.isValidPassword(req.body.password)){
        app.models.signinModel.saveUser(req.body, (err, cb)=> {
            if(err) res.status(401).json({'err': err});

            res.status(200).json({
                'status': 200,
                'message': cb
            })
        })
    }else{

        res.status(401).json({'error':'email ou senha inválida'})
    }
}
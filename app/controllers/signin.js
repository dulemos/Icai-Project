module.exports.signinController = (req, res, app) => {
    if(app.middlewares.login.isValidEmail(req.body.user) && app.middlewares.login.isValidPassword(req.body.password)){
        console.log('#################################### EMAIL E SENHA VÁLIDA')
        app.models.signinModel.saveUser(req.body, (err, cb)=> {
            if(err) res.status(401).json({'err': err});

            res.status(200).json({
                'status': 200,
                'message': cb
            })
        })
        // res.status(401).json({'error':'email ou senha inválida'})
    }
}
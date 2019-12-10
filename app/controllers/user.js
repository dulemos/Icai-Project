module.exports.searchUser = (app, req, res) => {
    app.middlewares.services.isTokenValid(req.query, (err, userId) => {
        if(err){
            res.status('401').json({
                "error": "Non valid Token"
            })
        } else {
            if(req.query.user){
                console.log(req.query.user)
                app.models.userModel.findUser(req.query.user, userData => { res.status('201').json(userData)})
            }
        }

    });
}

module.exports.getUser = (app, req, res) => {
    app.middlewares.services.isTokenValid(req.query, (err, userId) => {
        if(err){
            res.status('401').json({
                "error": "Non valid Token"
            })
        } else {
            app.models.userModel.findUser(userId, data => {
                if(data){
                    res.status('201').json(data);
                }else {
                    res.status('500').json({
                        "error": "something went wrong.."
                    })
                }
            })
        }

    });
}


module.exports.updateUser = (app, req, res) => {
    app.middlewares.services.isTokenValid(req.query, (err, userId) => {
        if(err){
            res.status('401').json({
                "error": "Non valid Token"
            })
        } else {
            if(req.body){
                res.status('201').json(req.query);
            }
        }

    });
}



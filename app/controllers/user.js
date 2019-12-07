module.exports.searchUser = (app, req, res) => {
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

module.exports.getUser = (app, req, res) => {
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



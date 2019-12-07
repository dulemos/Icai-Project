module.exports.getDiscussion = (app, req, res) => {
    app.middlewares.services.isTokenValid(req.query, (err, userId) => {
        if(err){
            res.status('401').json({
                "error": "Non valid Token"
            })
        } else {
            app.models.discussionModel.getDiscussion(userId, req.params.id, ret => {
                res.status('201').json(ret);
            })
        }

    });
}

module.exports.getAllDiscussions = (app, req, res) => {
    app.middlewares.services.isTokenValid(req.query, (err, userId) => {
        if(err){
            res.status('401').json({
                "error": "Non valid Token"
            })
        } else {
            app.models.discussionModel.getAllDiscussions(userId, ret => {
                res.status('201').json(ret);
            })
        }

    });
}

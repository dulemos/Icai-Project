module.exports.getTimeline = (app, req, res) => {
    app.middlewares.services.isTokenValid(req.query, (err, userId) => {
        if(err){
            res.status('401').json({
                "error": "Non valid Token"
            })
        } else {
            app.models.timelineModel.getTopPosts(userId, ret => {
                res.status('201').json(ret);
            })
        }

    });

}
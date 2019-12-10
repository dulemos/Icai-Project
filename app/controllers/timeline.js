module.exports.getTimeline = (app, req, res) => {
    app.middlewares.services.isTokenValid(req.query, (err, userId) => {
        if(err){
            res.status('401').json({
                "error": "Non valid Token"
            })
        } else {
            app.models.timelineModel.getTopPosts(userId, posts => {
                app.models.userModel.findUser(userId, userData => {
                    res.status('201').json(getPostToUser(userData.toJSON(), posts))
                })
                
            })
        }

    });

}

module.exports.newPost = (app, req, res) => {
    app.middlewares.services.isTokenValid(req.query, (err, userId) => {
        if(err){
            res.status('401').json({
                "error": "Non valid Token"
            })
        } else {
            if(req.body.post){
                app.models.timelineModel.newPost(userId, req.body.post, post => {
                    res.status('201').json(post)
                });
            }else{
                res.status('401').json({
                    "error": "No post content on body"
                })
            }
        }

    });
}

module.exports.myPosts = (app, req, res) => {
    app.middlewares.services.isTokenValid(req.query, (err, userId) => {
        if(err){
            res.status('401').json({
                "error": "Non valid Token"
            })
        } else {
            if(userId){
                app.models.timelineModel.getMyPosts(userId, (data) => res.status('201').json(data));
            }
        }

    });
}

module.exports.deletePost = (app, req, res) =>  {
    app.middlewares.services.isTokenValid(req.query, (err, userId) => {
        if(err){
            res.status('401').json({
                "error": "Non valid Token"
            })
        } else {
            if(req.query.id){
                app.models.timelineModel.deletePost(req.query.id, (count) => {
                    if(count == 0){
                        res.status('401').json(err)
                    }else{
                        res.status('201').json({"data": "successful delete"})
                    }

                });
            }else{
                res.status('402').json({"error": "No Id on query"})
            }
        }

    });
}

function getPostToUser(userData, posts) {
    let newPosts = [];
    userData.following.forEach(element => {
        posts.forEach(post =>  {
            if(element == post.user) newPosts.push(post)
        });
    });

    return(newPosts)
}
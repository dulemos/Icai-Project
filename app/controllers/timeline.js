module.exports.getTimeline = (app, req, res) => {
    if(app.middlewares.services.isTokenValid(req.query)) {
        res.status(200).json({"name": "BeetleJuice"});
    }else{
        res.status(401).json({"error": "Token invalid"})
    }

}
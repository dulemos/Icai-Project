module.exports = (app) => {
    app.get("/api", (req, res) => {
        res.status(200).json("Welcome to Icai API! :D")
    });

    app.post("/login", (req, res) => {
        app.controllers.login.login(app, req, res);
    });

    app.post("/signin", (req, res) => {
        app.controllers.signin.signinController(req, res, app);
    });

    app.get("/timeline", (req, res) => {
        app.controllers.timeline.getTimeline(app, req, res);
    })
}   
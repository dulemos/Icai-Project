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
    });

    app.get("/allDiscussions", (req, res) => {
        app.controllers.discussion.getAllDiscussions(app, req, res)
    });

    app.get("/discussion/:id", (req, res) => {
        app.controllers.discussion.getDiscussion(app, req, res);
    });

    app.get("/search/:user", (req, res) => {
        app.controllers.user.searchUser(app, req, res);
    });

    app.get("/user", (req, res) => {
        app.controllers.user.getUser(app, req, res);
    });

    app.put("/user", (req, res) => {
        app.controllers.user.updateUser(app, req, res);
    });
}   
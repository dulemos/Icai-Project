module.exports = (app) => {
    app.get("/", (req, res) => {
        res.status(200).json("Welcome to Icai API! :D")
    });

    app.post("/login", (req, res) => {
        app.controllers.login.login(app, req, res);
    })
}   
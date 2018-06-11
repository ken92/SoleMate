const path = require("path");

module.exports = (app) => {
    app.get("/home", (req, res) => {
        res.sendFile(path.join(__dirname, "../app/public/home.html"));
    });

    app.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname, "../app/public/survey.html"));
    });

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../app/public/home.html"));
    });
};
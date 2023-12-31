const JokeController = require("../controllers/jokes.controller");

module.exports = (app) => {
    app.get("/api/jokes", JokeController.getAllJokes);
    app.post(".api/jokes", JokeController.newJoke);
}

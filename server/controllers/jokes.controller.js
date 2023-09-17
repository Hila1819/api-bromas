const Joke = require("../models/jokes.model");

//CRUD  C create(crear)  / R read(leer) /U update(actualizar) / D delete(borrar)

const getAllJokes = (req, res) =>{
    Joke.find()
        .then((allJokes) => res.json(allJokes))
        .catch((err) => console.log(err));
};

const newJoke = (req, res) => {
    Joke.create(req.body)
    .then((newJoke) => res.json(newJoke))
    .catch((err) => console.log(err));
}

module.exports={
    getAllJokes,
    newJoke
}
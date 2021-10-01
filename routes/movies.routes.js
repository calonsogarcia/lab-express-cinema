const express = require('express');
const router = express.Router();
const MovieModel = require('../models/Movie.model')

router.get("/", (req, res, next) => {
    MovieModel.find()
    .then((movies) => {
        res.render('movies/movies.hbs', {movies})
    }).catch((err) => {
        console.log(err)
    });
})

router.get("/:id", (req, res, next) => {
    const {id} = req.params;
    MovieModel.findById(id)
    .then((movie) => {
        res.render('movies/movie-details.hbs', {movie})
    }).catch((err) => {
        console.log(err)
    });
})

module.exports = router;
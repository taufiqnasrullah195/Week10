const Movie = require("../models/movies.js")

class MovieRepository {

    static findMovies = async (next) => {
        try {
            const data = await Movie.getMovies(next);
            return data;
        }catch(err){
            next(err);
        }
        
    }

    static findById = async (id, next) => {
        try{
            const data = await Movie.findById(id, next);
            return data;
        } catch(err){
            next(err);
        }
    }

    static createMovie = async (params, next) => {
        try{
            return Movie.createMovie(params, next);
        }catch(err){
            next(err);
        }
    }

    static deleteMovie = async (id, next) => {
        try{
            return Movie.deleteMovie(id, next)
        }catch(err){
            next(err);
        }
    }
}

module.exports = MovieRepository;
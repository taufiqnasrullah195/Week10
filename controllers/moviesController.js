const MovieService = require("../services/movieservices.js")

class MoviesController {
    // static adalah METHOD milik CLASS
    // ==> Bukan method milik object
    static findMovies = async (req, res, next) => {

        try {
            const data = await MovieService.findMovies(next);
            res.status(200).json(data);
        }catch(err){
            next(err);
        }
        
    }

    static findById = async (req, res, next) => {
        try {
            const {id} = req.params;
            const data = await MovieService.findById(id, next);
            
            res.status(200).json(data);
        }catch(err) {
            next(err);
        }
        
    }

    static createMovie = async (req, res, next)=>{
        try{
            
            const data = await MovieService.createMovie(req.body, next)

            res.status(201).json(data);
        }catch(err){
            next(err);
        }
    }

    // static updateGame = async (req, res, next) => {
    //     try{
    //         const {id} = req.params;
    //     }catch(err){
    //         next(err);
    //     }
    // }

    static deleteMovie = async(req, res, next) =>{
        try{
            const {id} = req.params;

            const data = await MovieService.deleteMovie(id, next);

            if(data){
                res.status(200).json({
                    message: "Deleted Successfully", data
                })
            }else {
                next({name: "ErrorNotFound"})
            }
        }catch(err){
            next(err);
        }
    }
}

module.exports = MoviesController;
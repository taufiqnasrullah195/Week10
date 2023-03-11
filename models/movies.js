const pool = require("../config/config.js");
const { param } = require("../routes/movies.js");

class Movie {

    static getMovies = async (next) => {
        // callback (err, result)
        const findQuery = `
            SELECT 
            * 
            FROM movies;
        `
        // ASYNCHRONOUS
        try {
            const data = await pool.query (findQuery)

            return data.rows;
        } catch(err) {
            next(err);
        }
    }

    static findById = async (id, next) => {

        const findQuery = `
        SELECT
        movie.id AS id, 
        movie.title AS title,
        movie.genres AS genres,
        movie.year AS year,
        movie.image_url as image_url
        FROM movies
        WHERE id = $1
        `;

        try{
            const data = await pool.query(findQuery, [id])

            if(data.rows.length === 0) {
                next({name: "ErrorNotFound"})
            } else {
                return data.rows[0];
            }

        }catch(err){
            next(err);
        }
    }

    static createMovie = async (params, next) => {
        try{
            // console.log(params, "<<<<");
            const {id, title, genres, year} = params;
            const insertQuery = `
            INSERT INTO movies (id, title, genres, year)
                VALUES
                ($1, $2, $3, $4)
                RETURNING *
            ` 

            const data = await pool.query(insertQuery,[id, title, genres, year] )
            return data.rows[0];
        } catch(err){
            next(err);
        }
    }

    static deleteMovie = async (id, next) =>{
        try{
            // console.log(id)
            const deleteQuery = `
                DELETE FROM movies
                WHERE id = $1
                RETURNING *
                `

            const data = await pool.query(deleteQuery, [id]);

            return data.rows[0]
        }catch(err){
            next(err);
        }
    }
}

module.exports = Movie;
const {Pool} = require("pg")

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "moviesdb",
    password: "megaxus195",
    port: 5432
})

module.exports = pool;
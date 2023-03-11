const express = require("express");
const router = express.Router();
const MoviesController = require("../controllers/moviesController.js")



router.get("/", MoviesController.findMovies);
router.get("/:id", MoviesController.findById);
router.post("/",MoviesController.createMovie);
// router.put("/:id", MoviesController.updateGame);
router.delete("/:id", MoviesController.deleteMovie);
module.exports = router;
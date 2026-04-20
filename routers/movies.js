const express = require("express");
const router = express.Router();

/* Controller */
const moviesController = require("../controllers/moviesController");

/* Index */
router.get("/", moviesController.index);

/* Show */
router.get("/:id", moviesController.show)

module.exports = router;
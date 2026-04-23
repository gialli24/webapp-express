const express = require("express");
const router = express.Router();

/* Controller */
const reviewsController = require("../controllers/reviewsController");

/* Store */
router.post("/", reviewsController.store);

module.exports = router;
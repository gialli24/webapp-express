const express = require("express");
const app = express();
const port = process.env.port || 3000;
const cors = require("cors");

const moviesRouter = require("./routers/movies");

const errorHandler = require("./middlewares/errorHandler");
const notFound = require("./middlewares/notFound");

/* Public Middleware */
app.use(express.static("public"));

/* Cors Middleware */
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to Movies App");
});

/* Router */
app.use("/movies", moviesRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}. http://localhost:${port}`);
});

app.use(errorHandler);
app.use(notFound);
const express = require("express");
const app = express();
const port = process.env.port || 3000;

const moviesRouter = require("./routers/movies");

/* Public Middleware */
app.use(express.static("public"));

/* Cors */
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to Movies App");
});

/* Router */
app.use("/movies", moviesRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}. http://localhost:${port}`);
});
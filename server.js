const express = require("express");
const app = express();
const port = process.env.port || 3000;

/* Public Middleware */
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Welcome to Movies App");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}. http://localhost:${port}`);
});
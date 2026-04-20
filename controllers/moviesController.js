const conn = require("../database/db");

const index = (req, res) => {
    res.send("Movies Index");
};

const show = (req, res) => {
    res.send("Movies Show");
};

module.exports = {
    index,
    show
};
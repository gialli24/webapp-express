const conn = require("../database/db");

const index = (req, res) => {
    const sql = `
        SELECT movies.*, ROUND(AVG(reviews.vote), 1) AS rating_avg
        FROM movies
        JOIN reviews ON movies.id = reviews.movie_id
        GROUP BY movies.id
    `;

    conn.query(sql, (err, results) => {
        if (err) return res.status(500).send("Internal Server Error");
        if (results.length === 0) return res.status(404).send("Not Found");

        res.json(results);
    });
};

const show = (req, res) => {
    const id = Number(req.params.id);

    const getMovieSql = "SELECT * FROM movies WHERE id = ?";

    conn.query(getMovieSql, [id], (err, results) => {
        if (err) return res.status(500).send("Internal Server Error");
        if (results.length === 0) return res.status(404).send("Not Found");

        const movie = results[0];

        const getReviewsSql = "SELECT * FROM reviews WHERE movie_id = ?";

        conn.query(getReviewsSql, [id], (err, results) => {
            if (err) return res.status(500).send("Internal Server Error");

            movie.reviews = results;

            res.json(movie);
        })
    })
};

module.exports = {
    index,
    show
};
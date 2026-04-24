const conn = require("../database/db");

/* Create */
const store = (req, res) => {
    const { rating, review, movie_id } = req.body;
    const vote = rating;

    const sql = "INSERT INTO reviews (vote, review, movie_id) VALUES (?, ?, ?)";

    conn.query(sql, [vote, review, movie_id], (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Internal Server Error")
        };

        res.status(201).json({
            type: "success",
            message: 'Review left successfully',
            bookId: results.insertId
        });
    });
};

module.exports = {
    store
}
const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

// return all favorite images
router.get("/", (req, res) => {
  const QUERY = `SELECT * FROM favorites;`;

  pool
    .query(QUERY)
    .then((response) => {
      return response.rows;
    })
    .then((favGifs) => {
      res.send(favGifs).status(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

// add a new favorite
router.post("/", (req, res) => {
  const { title, username, gif, category } = req.body;
  const QUERY = `INSERT INTO favorites (title, username, gif) VALUES ($1, $2, $3);`;

  pool.query(QUERY, [title, username, gif]).then(
    res.sendStatus(201).catch((err) => {
      console.log(err);
      res.sendStatus(500);
    })
  );
});

// update given favorite with a category id
router.put("/:favId", (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  const gifId = req.params.favId;
  const categoryId = req.body.categoryToSet;

  const QUERY = `UPDATE favorites SET category_id = $2 WHERE favorites.id = $1;`;

  pool
    .query(QUERY, [gifId, categoryId])
    .then((response) => res.send(response).status(200))
    .catch((err) => console.log(err));
});

// delete a favorite
router.delete("/", (req, res) => {
  res.sendStatus(200);
});

module.exports = router;

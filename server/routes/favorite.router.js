const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

// return all favorite images
router.get("/", (req, res) => {
  res.sendStatus(200);
});

// add a new favorite
router.post("/", (req, res) => {
  const { title, username, gif, category } = req.body;
  const QUERY = `INSERT INTO favorites (title, username, gif) VALUES ($1, $2, $3);`;

  pool.query(QUERY, [title, username, gif]).then(res.sendStatus(201));
});

// update given favorite with a category id
router.put("/:favId", (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete("/", (req, res) => {
  res.sendStatus(200);
});

module.exports = router;

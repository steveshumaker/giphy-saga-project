const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

const apiKey = `67LD3d4iW5Vx7kSAaOK03fYSFJx1vHJP`;

router.get(`/`, (req, res) => {
  fetch(
    "https://api.giphy.com/v1/gifs/search?api_key=67LD3d4iW5Vx7kSAaOK03fYSFJx1vHJP&q=dog&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips"
  )
    .then((response) => {
      jResponse = response.json();
      console.log('SERVER DATA --> ', jResponse);
      return jResponse;
    })
    .then((gif) => {
      console.log('SERVER GIF DATA --> ', gif);
      res.send(gif)
    });
});

module.exports = router;

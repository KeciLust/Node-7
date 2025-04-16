const express = require("express");
const router = express.Router();
const stor = require("../public/books/storage");

router.get("/books", (req, res) => {
  const { book } = stor;
  res.json(book);
});

module.exports = router;

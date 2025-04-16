const express = require("express");
const router = express.Router();
const stor = require("../public/books/storage");

router.get("/books/:id", (req, res) => {
  const { id } = req.params;
  const { book } = stor;
  const bookById = book.findIndex((el) => el.id === id);
  if (bookById !== -1) {
    res.json(book[bookById]);
  } else {
    res.status(404).json({ message: `Book not found` });
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const stor = require("../public/books/storage");

router.put("/books/:id", (req, res) => {
  const { id } = req.params;
  const { book } = stor;
  const bookIndex = book.findIndex((el) => el.id === id);
  if (bookIndex !== -1) {
    book[bookIndex] = {
      ...req.body,
      title,
      description,
      author,
      favorite,
      fileName,
      fileCover,
    };
    res.json(book[bookIndex]);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

module.exports = router;

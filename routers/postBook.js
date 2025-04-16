const express = require("express");
const router = express.Router();
const stor = require("../public/books/storage");
const Book = require("../models/Book");
const fileMulter = require("../middleware/file");
const { v4: uuid } = require("uuid");

router.post("/books", fileMulter.single("fileBook"), (req, res) => {
  const { book } = stor;
  const { title, description, authors, favorite, fileName, fileCover } =
    req.body;
  const { path } = req.file;
  if ({ path }) {
    const normalizedPath = path.replace(/\\/g, "/").replace("public/", "");
    fileBook = normalizedPath;
  }
  const newBook = new Book(
    title,
    description,
    authors,
    favorite,
    fileName,
    fileCover,
    fileBook,
    (id = uuid())
  );
  book.push(newBook);
  res.json(newBook);
});

module.exports = router;

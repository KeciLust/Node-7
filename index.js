const express = require("express");
const path = require("path");
// middleware
const logger = require("./middleware/logger");

// routes
const loginRouter = require("./routers/login");
const getBooksRouter = require("./routers/getBooks");
const getBookRouter = require("./routers/getBook");
const postBookRouter = require("./routers/postBook");
const putBookRouter = require("./routers/putBook");
const deleteBookRouter = require("./routers/deleteBook");
const getBookDownLoadRouter = require("./routers/getBookDownLoad");

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use(logger);

app.use("/api", loginRouter);

app.use("/api", getBooksRouter);

app.use("/api", getBookRouter);

app.use("/api", postBookRouter);

app.use("/api", putBookRouter);

app.use("/api", deleteBookRouter);

app.use("/api", getBookDownLoadRouter);

app.listen(process.env.PORT || 3000);

const express = require("express");
const routes = require("./routes/v1");
const httpStatus = require("http-status");
const cors = require("cors");
const ApiError = require("./utils/ApiError");
const { errorConverter, errorHandler } = require("./middlewares/error");
const helmet = require("helmet");

const app = express();

app.use(helmet());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.options("*", cors());

app.use("/v1", routes);

app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Not Found"));
});

app.use(errorHandler);

module.exports = app;

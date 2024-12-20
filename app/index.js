const express = require("express");
const cors = require("cors");
const { morgan, defaultError, errorCatcher } = require("./middlewares");
const {
  brandRouter,
  itemRouter,
  serviceRouter,
  storedItemRouter,
  styleRouter,
  orderRouter,
} = require("./routers");

const app = express();

app.use(cors());
app.use(morgan.morganLogger(morgan.morganSetup));
app.use(express.json());
app.use("/api/brand", brandRouter);
app.use("/api/item", itemRouter);
app.use("/api/storeditem", storedItemRouter);
app.use("/api/service", serviceRouter);
app.use("/api/style", styleRouter);
app.use("/api/order", orderRouter);

app.use("/", defaultError);
app.use("/", errorCatcher);

module.exports = app;

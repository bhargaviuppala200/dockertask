require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require('path');
const fileUpload = require("express-fileupload");
const cors = require("cors");
const route = require("./routes/route");
const { createDefaultValues } = require("./controllers/emailStructure");
const { redisConnection } = require("./cache/subscription.js");
const fileValidity = require("./middleware/fileValidator.js");

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use(cors());
// app.use(express.json());
app.use(express.static("uploads"));
app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  })
);

// Cron imported
require("./crons/cronJobs");

app.use("/api/v1", route);
app.use("/Portfolios", express.static("volume/portfolio"));
app.use("/certificate", fileValidity, express.static("volume/certificates"));
app.use("/.well-known", express.static(path.join(__dirname, '.well-known')));

redisConnection();
// const receiveMessages = require('./sqs/sqsHandler');
// setInterval(receiveMessages, 5000);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});

// creating default email values
createDefaultValues();

//! Routes Tester
const toDisplay = {
  PORT: PORT,
  "API-For": "Client-Side",
  "Working-Status": true,
};
app.get("/", (req, res) => {
  res.send(toDisplay);
});

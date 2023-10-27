const express = require("express");
const cors = require("cors");
const app = express();
const songController = require("./controllers/songController.js");

app.use(cors());
app.use(express.json());

app.use("/songs", songController);

app.get("/", (req, res) => {
  res.send("welcome to songs ");
});


app.get("*", (req, res) => {
  res.redirect('/');
});


app.use((req, res) => {
  res.status(404).json({ status: 'BAD', data: { error: "wow sorry my friend" } });
});

module.exports = app;

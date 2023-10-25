const express = require("express");
const cors = require("cors");
const app = express();
const songsController = require("./controllers/bookmarksController");
app.use(cors());
app.use(express.json());

app.use("/songs", songsController);


app.get("/", (req, res) => {
  res.send("Welcome to Music App!");
});

app.get("*", (req, res) => {
  res.status(404).json({ success: false, data: { error: "page not found" } });
});
module.exports = app;
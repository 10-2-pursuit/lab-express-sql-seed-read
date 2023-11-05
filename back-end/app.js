const express = require("express");
const cors = require("cors");
const app = express();
const playlistController = require('./controllers/playlistController.js');
const songController = require('./controllers/songController.js');
const artistController = require('./controllers/artistController.js');

app.use(cors());
app.use(express.json());

// root
app.get("/", (request, response) => {
    response.send("Welcome to Tuner");
});

app.use("/songs", songController);
app.use("/playlist", playlistController);
app.use("/artists", artistController);

// 404 Page not found
app.get("*", (req, res) => {
    res.status(404).json({ error: "Page not found" });
});

module.exports = app;
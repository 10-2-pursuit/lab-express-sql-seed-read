const express = require("express");
const { getAllSongs } = require("../queries/songs.js");

const songs = express.Router();


songs.get("/", async (req, res) => {
    const allSongs = await getAllSongs();
    if (allSongs[0]) {
        res.status(200).json({ success: true, data: { payload: allSongs } });
    } else {
        res.status(500).json({ success: false, data: { error: "Server Error - we didn't do it!" } });
    }
});

module.exports = songs;
const express = require("express");
const { getAllSongs, createSong, getOneSong, deleteSong, updateSong } = require("../queries/songs.js");

const songs = express.Router();


songs.get("/", async (req, res) => {
    const allSongs = await getAllSongs();
    if (allSongs[0]) {
        res.status(200).json(allSongs);
    } else {
        res.status(500).json({ success: false, data: { error: "Server Error - songs not retrieved!" } });
    } 
});

songs.get("/:id", async (req, res) => {
    const { id } = req.params;
    const oneSong = await getOneSong(id);

    if (oneSong) {
        res.status(200).json(oneSong);
    } else {
        res.status(404).json( { error: "Song not found!" } );
    }
});

songs.post("/", async (req, res) => {
    try {
        const createdSong = await createSong(req.body)
        res.json(createdSong)
    } catch (error) {
        res.status(400).json({error: "There is an error"})
    }
})


module.exports = songs;
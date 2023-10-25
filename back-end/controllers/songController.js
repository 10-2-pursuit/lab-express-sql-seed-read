const express = require("express");
const { getAllSongs } = require('../queries/songs.js')
const songs = express.Router();

/** get */
songs.get("/", async (req, res) => {
    const allSongs = await getAllSongs();
    if(allSongs[0]){
        //no query, show everything
        res.status(200).json({success: true, data: { payload: allSongs }});
    }
    else{
        //do something for queries
        res.status(200).json({ success: false, data: { error: "Server Error - we didn't do it!" } });
    }
});

/** page 404 */
songs.get("*", (req, res) => {
    res.status(404).send("");
});

module.exports = songs;
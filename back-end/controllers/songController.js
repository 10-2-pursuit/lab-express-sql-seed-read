const express = require("express");
const { getAllSongs, createOneSong, getOneSong, updateOneSong, deleteOneSong } = require('../queries/songs.js');
const { checkName, checkBoolean } = require("../middlewares/validations.js");
const songs = express.Router();

/** get */
songs.get("/", async (req, res) => {
    const allSongs = await getAllSongs();
    if(allSongs[0]){
        //no query, show everything
        res.status(200).json(allSongs);
    }
    else{
        //do something for queries
        res.status(200).json({ success: false, data: { error: "Server Error - we didn't do it!" } });
    }
});

songs.get("/:id", async (req, res) => {
    const { id } = req.params;

    const song = await getOneSong(id);
    if(song[0] && song.length >= 1){
        //no query, show everything
        res.status(200).json(song[0]);
    }
    else{
        //do something for queries
        res.status(404).json("wrong");
    }
});

/** post */
songs.post("/", checkName, checkBoolean, async (req, res) => {
    //const {name, artist, album, time, is_favorite} = req.body;
    const song = await createOneSong(req.body);
    if(song[0] && song.length > 0){
        res.status(200).json(song[0]);
    }
    else{
        res.status(400).json("wrong");
    }
});

/** put */
songs.put("/:id", checkName, checkBoolean, async (req,res) => {
    const {id} = req.params;

    const song = await updateOneSong(id, req.body);
    if(song[0] && song.length > 0){
        res.status(200).json(song[0]);
    }
    else{
        res.status(400).json("wrong")
    }
});

/** delete */
songs.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const song = await deleteOneSong(id);
    if(song[0] && song.length > 0){
        res.status(200).json(song[0]);
    }
    else{
        res.status(404).json("wrong");
    }
});

/** page 404 */
songs.get("*", (req, res) => {
    res.status(404).send("with incorrect id - sets status to 404 and returns error key");
});

module.exports = songs;
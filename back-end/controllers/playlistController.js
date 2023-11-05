const { Router } = require("express");
const { addSong, removeSong, getAll } = require("../queries/playlist");
const playlist = Router();

playlist.get("/", async (req, res) => {
    const songList = await getAll();
    if(songList[0]){
        res.status(200).json(songList);
    }
    else{
        res.status(400).json({ success: false, data: { error: "Server Error - we didn't do it!" } })
    }
});

playlist.post("/", async (req,res) => {
    const { id } = req.body;
    console.log(id);
    const songList = await addSong(id);
    if(songList[0] && songList.length > 0){
        res.status(200).json(songList[0]);
    }
    else{
        res.status(400).json("wrong");
    }
})

playlist.delete("/", async (req, res) => {
    const { id } = req.body;
    const songList = await removeSong(id);
    if(songList[0] && songList.length > 0){
        res.status(200).json(songList[0]);
    }
    else{
        res.status(404).json("wrong");
    }
})

module.exports = playlist;
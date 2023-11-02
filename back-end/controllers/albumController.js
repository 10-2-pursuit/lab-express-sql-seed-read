const express = require("express");
const { getAllAlbums, createOneAlbum, getOneAlbum, updateOneAlbum, deleteOneAlbum } = require('../queries/albums.js')
const albums = express.Router();

/** get */
albums.get("/", async (req, res) => {
    const allSongs = await getAllAlbums();
    if(allSongs[0]){
        //no query, show everything
        res.status(200).json(allSongs);
    }
    else{
        //do something for queries
        res.status(200).json({ success: false, data: { error: "Server Error - we didn't do it!" } });
    }
});

albums.get("/:id", async (req, res) => {
    const { id } = req.params;

    const album = await getOneAlbum(id);
    if(album[0] && album.length >= 1){
        //no query, show everything
        res.status(200).json(album[0]);
    }
    else{
        //do something for queries
        res.status(404).json("wrong");
    }
});

/** post */
albums.post("/", async (req, res) => {
    try{
        const {artist_id} = req.params;
        const album = await createOneAlbum(req.body, artist_id);
        if(album[0] && album.length > 0){
            res.status(200).json(album[0]);
        }
        else{
            res.status(400).json("wrong");
        }
    }
    catch(err){
        res.status(400).json({err: "wrr"})
    }
    
});

/** put */
albums.put("/:id", async (req,res) => {
    const {id, artist_id} = req.params;

    const album = await updateOneAlbum(id, {...req.body, artist_id});
    if(album[0] && album.length > 0){
        res.status(200).json(album[0]);
    }
    else{
        res.status(400).json("wrong")
    }
});

/** delete */
albums.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const album = await deleteOneAlbum(id);
    if(album[0] && album.length > 0){
        res.status(200).json(album[0]);
    }
    else{
        res.status(404).json("wrong");
    }
});

/** page 404 */
albums.get("*", (req, res) => {
    res.status(404).send("with incorrect id - sets status to 404 and returns error key");
});

module.exports = albums;
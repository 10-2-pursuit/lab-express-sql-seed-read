const express = require("express");
const { getAllArtists, getOneArtist, createOneArtist, updateOneArtist, deleteOneAritst } = require("../queries/artists");
const { getAllAlbums } = require("../queries/albums");
const artists = express.Router();

/** get */
artists.get("/", async (req, res) => {
    const allArtists = await getAllArtists();
    if(allArtists[0]){
        //no query, show everything
        res.status(200).json(allArtists);
    }
    else{
        //do something for queries
        res.status(200).json({ success: false, data: { error: "Server Error - we didn't do it!" } });
    }
});

artists.get("/:id", async (req, res) => {
    const { id } = req.params;

    const artist = await getOneArtist(id);
    const allAlbums = await getAllAlbums(id);
    if(artist[0] && artist.length >= 1){
        //no query, show everything
        res.status(200).json({...artist[0], albums:[...allAlbums]});
    }
    else{
        //do something for queries
        res.status(404).json("wrong");
    }
});

/** post */
artists.post("/", async (req, res) => {
    //const {name, artist, album, time, is_favorite} = req.body;
    const artist = await createOneArtist(req.body);
    if(artist[0] && artist.length > 0){
        res.status(200).json(artist[0]);
    }
    else{
        res.status(400).json("wrong");
    }
});

/** put */
artists.put("/:id", async (req,res) => {
    const {id} = req.params;

    const artist = await updateOneArtist(id, req.body);
    if(artist[0] && artist.length > 0){
        res.status(200).json(artist[0]);
    }
    else{
        res.status(400).json("wrong")
    }
});

/** delete */
artists.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const artist = await deleteOneAritst(id);
    if(artist[0] && artist.length > 0){
        res.status(200).json(artist[0]);
    }
    else{
        res.status(404).json("wrong");
    }
});

/** page 404 */
artists.get("*", (req, res) => {
    res.status(404).send("with incorrect id - sets status to 404 and returns error key");
});

module.exports = artists;
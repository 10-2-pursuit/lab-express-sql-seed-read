const express = require("express");
const albums = express.Router({ mergeParams: true });
const { getOneSong } = require("../queries/songs.js");
const {
  getAllAlbums,
  getOneAlbum,
  deleteAlbum,
  createAlbum,
  updateAlbum,
} = require("../queries/albums.js");

albums.get("/", async (req, res) => {
  const { song_id } = req.params;
  try {
    const song = await getOneSong(song_id);
    const allAlbums = await getAllAlbums(song_id);
    res.json({ ...song, allAlbums });
  } catch (error) {
    res.json(error);
  }
});

albums.get("/:album_id", async (req, res) => {
  const { album_id, song_id } = req.params;
  try {
    const album = await getOneAlbum(album_id);
    const song = await getOneSong(song_id);
    if (album.id) {
      res.status(200).json({ ...song, album });
    } else {
      res.status(404).json("No album at that id");
    }
  } catch (error) {
    res.json(error);
  }
});

albums.post("/", async (req, res) => {
  try {
    const { song_id } = req.params;
    const createdAlbum = await createAlbum(song_id, req.body);
    res.status(200).json(createdAlbum);
  } catch (error) {
    res.status(400).json({ error: "Album not created!" });
  }
});

albums.delete("/:album_id", async (res, req) => {
  try {
    const { album_id } = req.params;
    const deletedAlbum = await deleteAlbum(album_id);
    if (deletedAlbum.id) {
      res.status(200).json(deletedAlbum);
    } else {
      res.status(404).json({error: "No album at that id!"});
    }
  } catch (error) {
    res.send(error);
  }
});

albums.put("/:id", async (res, req) => {
    const {id, song_id} = req.params;
    const updatedAlbum = await updateAlbum({song_id, id, ...req.body});
    if(updatedAlbum.id) {
        res.status(200).json(updatedAlbum)
    } else {
        res.status(404).json({error: "No album at that id!"})
    }
})

module.exports = albums;

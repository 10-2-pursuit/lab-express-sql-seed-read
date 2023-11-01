const express = require("express");
const albums = express.Router({ mergeParams: true });
const { getOneSong } = require("../queries/songs.js");
const { getAllAlbums } = require("../queries/albums.js");

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

module.export = albums;

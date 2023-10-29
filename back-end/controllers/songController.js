const express = require("express");
const {
  getAllSongs,
  createSong,
  getOneSong,
  deleteSong,
  updateSong,
} = require("../queries/songs.js");
const {
  checkName,
  checkArtist,
  checkAlbum,
  checkTime,
  checkBoolean,
} = require("../validatons/checkSongs.js");
const songs = express.Router();

songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();

  if (allSongs[0]) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({
      success: false,
      data: { error: "Server Error - songs not retrieved!" },
    });
  }
});

songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneSong = await getOneSong(id);

  if (oneSong.id) {
    res.status(200).json(oneSong);
  } else {
    res.status(404).json("No song at that id");
  }
});

songs.post("/", checkName, checkArtist, checkAlbum, checkTime, checkBoolean, async (req, res) => {
  try {
    const createdSong = await createSong(req.body);
    res.status(200).json(createdSong);
  } catch (error) {
    res.status(404).json({ error: "There is an error" });
  }
});

songs.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSong = await deleteSong(id);

    if (deletedSong.id) {
      res.status(200).json(deletedSong);
    } else {
      res.status(404).json("No song at that id");
    }
  } catch (error) {
    res.send(error);
  }
});

songs.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedSong = await updateSong(id, req.body);

  if (updatedSong.id) {
    res.status(200).json(updatedSong);
  } else {
    res.status(404).json("No song at that id");
  }
});

module.exports = songs;

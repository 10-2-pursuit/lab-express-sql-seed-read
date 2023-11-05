const express = require("express");
const playlists = express.Router({ mergeParams: true });
const { getOneSong } = require("../queries/songs.js");
const {
  getAllPlaylists,
  getOnePlaylist,
  createPlaylist,
  deletePlaylist,
  updatePlaylist,
} = require("../queries/playlists.js");

playlists.get("/", async (req, res) => {
  const { song_id } = req.params;
  try {
    const song = await getOneSong(song_id);
    const allPlaylists = await getAllPlaylists(song_id);
    res.json({ ...song, allPlaylists });
  } catch (error) {
    res.status(404).json({ error: "Something is wrong!" });
  }
});

playlists.get("/:playlist_id", async (req, res) => {
  const { playlist_id, song_id } = req.params;
  try {
    const playlist = await getOnePlaylist(playlist_id);
    const song = await getOneSong(song_id);
    if (playlist.id) {
      res.status(200).json({ ...song, playlist });
    } else {
      res.status(404).json("No playlist at that id");
    }
  } catch (error) {
    res.status(404).json({ error: "Something is wrong!" });
  }
});

playlists.post("/", async (req, res) => {
  try {
    const { song_id } = req.params;
    const createdPlaylist = await createPlaylist(song_id, req.body);
    res.status(200).json(createdPlaylist);
  } catch (error) {
    res.status(400).json({ error: "Playlist not created!" });
  }
});

playlists.delete("/:playlist_id", async (req, res) => {
  try {
    const { playlist_id } = req.params;
    const deletedPlaylist = await deletePlaylist(playlist_id);
    if (deletedPlaylist) {
      res.status(200).json(deletedPlaylist);
    } else {
      res.status(404).json({error: "No playlist at that id!"});
    }
  } catch (error) {
    res.status(404).json({ error: "Something is wrong!" });
  }
});

playlists.put("/:id", async (req, res) => {
    const {id, song_id} = req.params;
    const updatedPlaylist = await updatePlaylist({song_id, id, ...req.body});
    if(updatedPlaylist.id) {
        res.status(200).json(updatedPlaylist)
    } else {
        res.status(404).json({error: "No playlist at that id!"})
    }
})

module.exports = playlists;

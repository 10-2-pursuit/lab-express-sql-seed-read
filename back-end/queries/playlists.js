const db = require("../db/dbConfig.js");

const getAllPlaylists = async (song_id) => {
  try {
    const allPlaylists = await db.any(
      "SELECT * FROM playlists WHERE song_id=$1",
      song_id
    );
    return allPlaylists;
  } catch (error) {
    return error;
  }
};

const getOnePlaylist = async (id) => {
  try {
    const onePlaylist = await db.one("SELECT * FROM playlists WHERE id=$1", id);
    return onePlaylist;
  } catch (error) {
    return error;
  }
};

const deletePlaylist = async (id) => {
  try {
    const deletedPlaylist = await db.one(
      "DELETE FROM playlists WHERE id=$1 RETURNING *",
      id
    );
    return deletedPlaylist;
  } catch (error) {
    return error;
  }
};

const createPlaylist = async (song_id, playlist) => {
  try {
    const { title, creator, creation_year } = playlist;
    const createdPlaylist = await db.one(
      "INSERT INTO playlists (title, creator, creation_year, song_id) VALUES ($1, $2, $3, $4) RETURNING *",
      [title, creator, creation_year, song_id]
    );
    return createdPlaylist;
  } catch (error) {
    return error;
  }
};

const updatePlaylist = async (playlist) => {
  try {
    const { title, creator, creation_year, song_id, id } = playlist;
    const updatedPlaylist = await db.one(
      "UPDATE playlists SET title=$1, creator=$2, creation_year=$3, song_id=$4 WHERE id=$5",
      [title, creator, creation_year, song_id, id]
    );
    return updatedPlaylist;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllPlaylists,
  getOnePlaylist,
  deletePlaylist,
  createPlaylist,
  updatePlaylist,
};

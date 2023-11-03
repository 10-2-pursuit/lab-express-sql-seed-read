const db = require("../db/dbConfig.js");

const getAllAlbums = async (song_id) => {
  try {
    const allAlbums = await db.any(
      "SELECT * FROM albums WHERE song_id=$1",
      song_id
    );
    return allAlbums;
  } catch (err) {
    return err;
  }
};

const getOneAlbum = async (id) => {
  try {
    const oneAlbum = await db.one("SELECT * FROM albums WHERE id=$1", id);
    return oneAlbum;
  } catch (error) {
    return error;
  }
};

const deleteOneAlbum = async (id) => {
  try {
    const deletedAlbum = await db.one(
      "DELETE FROM songs WHERE id=$1 RETURNING *",
      id
    );
    return deletedAlbum;
  } catch (error) {
    return error;
  }
};

const createAlbum = async (song_id, album) => {
  try {
    const { title, artist, year } = album;
    const createdAlbum = await db.one(
      "INSERT INTO albums (title, artist, year, song_id) VALUES ($1, $2, $3, $4) RETURNING *",
      [title, artist, year, song_id]
    );
    return createdAlbum;
  } catch (error) {
    return error;
  }
};

const updateAlbum = async (album) => {
  try {
    const { title, artist, year, song_id, id } = album;
    const updatedAlbum = await db.one(
      "UPDATE albums SET title=$1, artist=$2, year=$3, song_id=$4 WHERE id=$5",
      [title, artist, year, song_id, id]
    );
    return updatedAlbum;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllAlbums,
  getOneAlbum,
  deleteOneAlbum,
  createAlbum,
  updateAlbum,
};

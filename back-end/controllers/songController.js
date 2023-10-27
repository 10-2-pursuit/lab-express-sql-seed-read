const express = require('express');
const songs = express.Router();
const db = require('../db/dbConfig.js'); 

// Get all songs
songs.get('/', async (req, res) => {
    
  try {
    const allSongs = await db.query('SELECT * FROM songs'); 
    res.json(allSongs);
  } catch (error) {
    console.error('Error fetching songs:', error);
    res.status(500).json({ error: 'An error occurred while fetching songs.' });
  }
});

// Get a specific song by ID
songs.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const song = await db.query('SELECT * FROM songs WHERE id = $1', [id]); 
    if (song.length === 0) {
      res.status(404).json({ error: 'Song not found' });
    } else {
      res.json(song[0]);
    }
  } catch (error) {
    console.error('Error fetching song:', error);
    res.status(500).json({ error: 'An error occurred while fetching the song.' });
  }
});

// Create a new song
songs.post('/', async (req, res) => {
  const { name, url, category, description, is_favorite } = req.body;
  try {
    const newSong = await db.query(
      'INSERT INTO songs (name, url, category, description, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *', 
      [name, url, category, description, is_favorite]
    );
    res.status(201).json(newSong[0]);
  } catch (error) {
    console.error('Error creating a new song:', error);
    res.status(500).json({ error: 'An error occurred while creating a new song.' });
  }
});

// Update a song by ID
songs.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, url, category, description, is_favorite } = req.body;
  try {
    const updatedSong = await db.query(
      'UPDATE songs SET name = $1, url = $2, category = $3, description = $4, is_favorite = $5 WHERE id = $6 RETURNING *', 
      [name, url, category, description, is_favorite, id]
    );
    if (updatedSong.length === 0) {
      res.status(404).json({ error: 'Song not found' });
    } else {
      res.json(updatedSong[0]);
    }
  } catch (error) {
    console.error('Error updating song:', error);
    res.status(500).json({ error: 'An error occurred while updating the song.' });
  }
});

// Delete a song by ID
songs.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedSong = await db.query('DELETE FROM songs WHERE id = $1 RETURNING *', [id]); 
    if (deletedSong.length === 0) {
      res.status(404).json({ error: 'Song not found' });
    } else {
      res.json(deletedSong[0]);
    }
  } catch (error) {
    console.error('Error deleting song:', error);
    res.status(500).json({ error: 'An error occurred while deleting the song.' });
  }
});

module.exports = songs;

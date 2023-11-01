    DROP DATABASE IF EXISTS songs_dev;
    CREATE DATABASE songs_dev;

    \c songs_dev;

    CREATE TABLE songs (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        artist TEXT NOT NULL,
        album TEXT,
        time TEXT,
        is_favorite BOOLEAN
    );

    CREATE TABLE albums (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    artist TEXT NOT NULL,
    release_year INT
    song_ids INTEGER [] 
    FOREIGN KEY (song_ids) REFERENCES songs (id) ON DELETE CASCADE
    );
DROP DATABASE IF EXISTS songs_dev;
CREATE DATABASE songs_dev;

\c songs_dev;

CREATE TABLE artists (
    artist_id SERIAL PRIMARY KEY,
    artist TEXT NOT NULL,
    nationality TEXT,
    is_favorite BOOLEAN
);

CREATE TABLE albums (
    album_id SERIAL PRIMARY KEY,
    album TEXT NOT NULL,
    year TEXT,
    is_favorite BOOLEAN,
    artist_id INTEGER REFERENCES artists (artist_id) ON DELETE CASCADE
);

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT,
    time TEXT,
    is_favorite BOOLEAN,
    album_id INTEGER REFERENCES albums (album_id) on DELETE CASCADE
);

CREATE TABLE playlist (
    playlist_id SERIAL PRIMARY KEY,
    song_id INTEGER REFERENCES songs (id) ON DELETE CASCADE
);


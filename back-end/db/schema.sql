DROP DATABASE IF EXISTS songs_dev;
CREATE DATABASE songs_dev;

\c songs_dev;

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT,
    time TEXT,
    is_favorite BOOLEAN,
    album_id INTEGER REFERENCES albums (id) on DELETE CASCADE,
    artist_id INTEGER REFERENCES aritsts (id) on DELETE CASCADE
);

CREATE TABLE artists (
    id SERIAL PRIMARY KEY,
    artist TEXT NOT NULL,
    nationality TEXT,
    is_favorite BOOLEAN
);

CREATE TABLE albums (
    id SERIAL PRIMARY KEY,
    album TEXT NOT NULL,
    year TEXT,
    is_favorite BOOLEAN,
    artist_id INTEGER REFERENCES artists (id) ON DELETE CASCADE
);


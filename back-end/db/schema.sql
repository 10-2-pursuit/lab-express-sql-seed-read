DROP DATABASE IF EXISTS songs_dev;
CREATE DATABASE song_dev;

\c song_dev

CREATE TABLE  song (
     id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    url TEXT,
    category TEXT,
    description TEXT,
    is_favorite BOOLEAN
);
-- Drop the database if it exists
DROP DATABASE IF EXISTS songs_dev;

-- Create the database
CREATE DATABASE songs_dev;

-- Connect to the songs_dev database

\c songs_dev

-- Create the 'songs' table


CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    url TEXT,
    category TEXT,
    description TEXT,
    is_favorite BOOLEAN
);

/**
 * CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT,
    time TEXT,
    is_favorite BOOLEAN
);
 */

export const songsInterface = {
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
}
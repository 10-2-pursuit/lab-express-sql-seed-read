const db = require("../db/dbConfig.js");

const getAllSongs = async () => {
    try {
        const allSongs = await db.any("SELECT * FROM songs");
        return allSongs
    } catch(err) {
        return err
    }
}

const getOneSong = async (id) => {
    try{
        const song = await db.any(`SELECT * FROM songs WHERE id = ${id}`);
        return song;
    } catch(err) {
        return err;
    }
}

const createOneSong = async (item) => {
    console.log(item)
    if(!item.name || !item.artist ){
        return {error: "something is missing"};
    }
    try {
        const oneSong = await db.any(`INSERT INTO songs (name, artist, album, time, is_favorite) VALUES ('${item.name}', '${item.artist}', '${item.album}', '${item.time}', ${item.is_favorite}) RETURNING *`);
        return oneSong;
    } catch(err){
        return err;
    }
}

const updateOneSong = async(id, body) => {
    try {
        const song = await db.any(`UPDATE songs SET name='${body.name}', artist='${body.artist}', album='${body.album}', time='${body.time}', is_favorite=${body.is_favorite} WHERE id = ${id} RETURNING *`);
        return song;
    } catch(err){
        return err;
    }
}

const deleteOneSong = async(id) => {
    //console.log(id);
    try {
        const song = await db.any(`DELETE FROM songs WHERE id = ${id} RETURNING *`);
        return song;
    } catch(err){
        return err;
    }
}
const getOneBookmark = () => {};

const deleteBookmark = () => {};

const updateBookmark = () => {};

module.exports = {
    getAllSongs,
    createOneSong,
    getOneSong,
    updateOneSong,
    deleteOneSong,
}
const db = require("../db/dbConfig.js");

const getAll = async () => {
    try {
        const playlist = 
            await db.any("SELECT * FROM playlist AS song_id JOIN songs ON (song_id = songs.id)");
        return playlist
    } catch(err) {
        return err
    }
}

const addSong = async (song_id) => {
    if(!song_id){
        return {error: "something is missing"};
    }
    try {
        const playlist = await db.any(`INSERT INTO playlist (song_id) VALUES ('${song_id}') RETURNING *`);
        return playlist;
    } catch(err){
        return err;
    }
}

const removeSong = async (id) => {
    try {
        const playlist = await db.any(`DELETE FROM playlist WHERE playlist_id = ${id} RETURNING *`);
        return playlist;
    } catch(err){
        return err;
    }
}

module.exports = {
    addSong,
    removeSong,
    getAll,
}
const db = require("../db/dbConfig.js");

const getAllArtists = async () => {
    try {
        const allArtists = await db.any("SELECT * FROM artists");
        return allArtists
    } catch(err) {
        return err
    }
}

const getOneArtist = async (id) => {
    try{
        const artist = await db.any(`SELECT * FROM artists WHERE artist_id = ${id}`);
        return artist;
    } catch(err) {
        return err;
    }
}

const searchOneArtistByName = async (name) => {
    try{
        const artist = await db.one(`SELECT * FROM artists WHERE artist = ${name}`);
        return artist;
    } catch(err) {
        return err;
    }
}

const createOneArtist = async (item) => {
    if(!item.name || !item.artist ){
        return {error: "something is missing"};
    }
    try {
        //(artist, nationality, is_favorite)
        const artist = await db.any(`INSERT INTO artists (artist, nationality, is_favorite) VALUES ('${item.artist}', '${item.nationality}', ${item.is_favorite}) RETURNING *`);
        return artist;
    } catch(err){
        return err;
    }
}

const updateOneArtist = async(id, body) => {
    try {
        const artist = await db.any(`UPDATE artists SET artist='${body.artist}', nationality='${body.nationality}', is_favorite=${body.is_favorite} WHERE artist_id = ${id} RETURNING *`);
        return artist;
    } catch(err){
        return err;
    }
}

const deleteOneAritst = async(id) => {
    //console.log(id);
    try {
        const artist = await db.any(`DELETE FROM artists WHERE artist_id = ${id} RETURNING *`);
        return artist;
    } catch(err){
        return err;
    }
}

module.exports = {
    getAllArtists,
    getOneArtist,
    createOneArtist,
    updateOneArtist,
    deleteOneAritst,
    searchOneArtistByName
}
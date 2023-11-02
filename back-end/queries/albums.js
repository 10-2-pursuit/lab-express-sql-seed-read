const db = require("../db/dbConfig.js");

const getAllAlbums = async (artist_id) => {
    if(!id){
        try {
            const allAlbums = await db.any("SELECT * FROM albums");
            return allAlbums;
        } catch(err) {
            return err
        }
    }
    else{
        try {
            const allAlbums = await db.any(`SELECT * FROM albums WHERE artist_id = '${artist_id}'`);
            return allAlbums;
        } catch(err) {
            return err
        }
    }
}

const getOneAlbum = async (id) => {
    try{
        const album = await db.any(`SELECT * FROM albums WHERE id = ${id}`);
        return album;
    } catch(err) {
        return err;
    }
}

const createOneAlbum = async (item, artist_id) => {
    if(!item.name || !item.artist ){
        return {error: "something is missing"};
    }
    try {
        //(artist, nationality, is_favorite)
        const album = await db.any(`INSERT INTO albums (album, year, is_favorite, artist_id) VALUES ('${item.album}', '${item.year}', ${item.is_favorite}, '${artist_id}') RETURNING *`);
        return album;
    } catch(err){
        return err;
    }
}

const updateOneAlbum = async(id, body) => {
    try {
        const album = await db.any(`UPDATE albums SET album='${body.album}', year='${body.year}' artist_id='${body.artist_id}', is_favorite=${body.is_favorite}, artist_id = ${body.artist_id} WHERE id = ${id} RETURNING *`);
        return album;
    } catch(err){
        return err;
    }
}

const deleteOneAlbum = async(id) => {
    //console.log(id);
    try {
        const album = await db.any(`DELETE FROM albums WHERE id = ${id} RETURNING *`);
        return album;
    } catch(err){
        return err;
    }
}

module.exports = {
    getAllAlbums,
    getOneAlbum,
    createOneAlbum,
    updateOneAlbum,
    deleteOneAlbum,
}
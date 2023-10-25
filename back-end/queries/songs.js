const db = require("../db/dbConfig.js");

const getAllSongs = async () => {
    try {
        const allSongs = await db.any("SELECT * FROM songs");
    } catch(err) {
        return err
    }
}

module.exports = {
    getAllSongs
}
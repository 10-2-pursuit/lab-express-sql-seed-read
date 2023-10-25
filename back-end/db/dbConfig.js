const pgp = require("pg-promise")();

require('dotenv').config();

const cn = {
    host: process.env.PG_HOST, 
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE || "songs_dev",
    user: process.env.PG_USER
};

const db = pgp(cn);

module.exports = db;
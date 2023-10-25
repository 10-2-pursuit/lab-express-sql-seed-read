const pgp = require("pg-promise")();

require('dotenv').config();

const cn = {
    host: process.env.PG_HOST,
    host: process.env.PG_PORT,
    host: process.env.PG_DATABASE,
    host: process.env.PG_USER
}

const db = pgp(cn);

module.exports = db;
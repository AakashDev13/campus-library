const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'campus_app',
    password: 'Campus123@',
    database: 'gqldemo'
});

module.exports = pool;
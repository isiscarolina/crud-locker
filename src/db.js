const mysql = require('mysql');
const { database } = require('./keys');
const pool = mysql.createPool(database);
const { promisify } = require('util');

pool.getConnection((err, conn) => {
    if(err) {
        if (err.code == 'PROTOCOL_CONNECTION_LOST') {
            console.error('CONEÇÃO DA BASE DE DADOS FOI FECHADA');
        }
        if (err.code == 'ER_CON_COUNT_ERROR') {
            console.error('BASE DE DADOS COM MUITAS CONEXÕES');
        }
        if (err.code == 'ECONNREFUSED') {
            console.error('CONEXÃO DA BASE DE DADOS FOI REJEITADA');
        }   
    }
    if (conn) conn.release();
    console.log('DB conetado');
    return;
});

pool.query = promisify(pool.query);

module.exports = pool;
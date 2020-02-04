import mysql from 'promise-mysql'
const { database } = require('./keys');

const pool = mysql.createPool(database);

pool.getConnection().then(connection => {
  pool.releaseConnection(connection);
  console.log('Conectado a la Base de Datos');
});

export default pool;
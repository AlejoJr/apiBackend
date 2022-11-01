import mysql from 'promise-mysql'
// import config from './../configuration'

// const mysqll = require('mysql')
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'eu-cdbr-west-03.cleardb.net',
  database: 'heroku_4b6f5443ffb8ab5',
  user: 'bd0dc601319000',
  password: 'd5fce2cf'
})

/* host: config.host,
  database: config.database,
  user: config.user,
  password: config.password */

/* const connection = mysql.createConnection({
  host: 'eu-cdbr-west-03.cleardb.net',
  database: 'heroku_4b6f5443ffb8ab5',
  user: 'bd0dc601319000',
  password: 'd5fce2cf'
}) */

const getConnectionDb = () => {
  return pool
}

export default getConnectionDb

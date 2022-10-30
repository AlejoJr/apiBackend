import mysql from 'promise-mysql'
// import config from './../configuration'

const connection = mysql.createConnection({
  host: 'eu-cdbr-west-03.cleardb.net',
  database: 'heroku_4b6f5443ffb8ab5',
  user: 'bd0dc601319000',
  password: 'd5fce2cf'
  /* host: config.host,
  database: config.database,
  user: config.user,
  password: config.password */
})

const getConnectionDb = () => {
  return connection
}

export default getConnectionDb

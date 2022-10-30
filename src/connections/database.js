import mysql from 'promise-mysql'
import config from './../configuration'

const connection = mysql.createConnection({
  host: config.host,
  database: config.database,
  user: config.user,
  password: config.password
})

const getConnectionDb = () => {
  return connection
}

export default getConnectionDb

import getConnectionDb from '../connections/database'

const getObjectDb = async (req, res) => {
  try {
    const connection = await getConnectionDb()
    const result = await connection.query('SELECT * FROM bank')
    res.json(result)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const getObjectDbById = async (req, res) => {
  try {
    const { id } = req.params
    const connection = await getConnectionDb()
    const result = await connection.query('SELECT * FROM bank WHERE id=?', id)
    res.json(result)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const addObjectDb = async (req, res) => {
  try {
    const { name, address, clients } = req.body

    if (name === undefined || address === undefined || clients === undefined) {
      res.status(500)
      return res.json({ message: 'Porfavor envie todos los parametros' })
    }

    const bank = { name, address, clients }
    const connection = await getConnectionDb()
    const result = await connection.query('INSERT INTO bank SET ?', bank)

    res.json({ message: 'Registro añadido', result })
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const updateObjectDbId = async (req, res) => {
  try {
    const { id } = req.params
    const { name, address, clients } = req.body

    if (name === undefined || address === undefined || clients === undefined) {
      res.status(500)
      return res.json({ message: 'Porfavor envie todos los parametros' })
    }

    const objBank = { name, address, clients }

    const connection = await getConnectionDb()
    const result = await connection.query('UPDATE bank SET ? WHERE id=?', [objBank, id])
    res.json(result)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const deletedObjectDbId = async (req, res) => {
  try {
    const { id } = req.params
    const connection = await getConnectionDb()
    const result = await connection.query('DELETE FROM bank WHERE id=?', id)
    res.json(result)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

export const bankController = {
  getObjectDb,
  getObjectDbById,
  addObjectDb,
  updateObjectDbId,
  deletedObjectDbId
}

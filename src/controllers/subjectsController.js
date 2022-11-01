import getConnectionDb from '../connections/database'

const getSubjects = async (req, res) => {
  try {
    const connection = await getConnectionDb()
    const result = await connection.query('SELECT id as value, name as label FROM subject')
    res.json(result)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const getSubjectById = async (req, res) => {
  try {
    const { id } = req.params
    const connection = await getConnectionDb()
    const result = await connection.query('SELECT * FROM subject WHERE id=?', id)
    res.json(result)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const addSubject = async (req, res) => {
  try {
    const { name } = req.body

    if (name === undefined) {
      res.status(500)
      return res.json({ message: 'Porfavor envie todos los parametros' })
    }

    const subject = { name }
    const connection = await getConnectionDb()
    const result = await connection.query('INSERT INTO subject SET ?', subject)

    res.json({ message: 'Asignatura añadida', result })
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const updateSubject = async (req, res) => {
  try {
    const { id } = req.params
    const { name } = req.body

    if (name === undefined) {
      res.status(500)
      return res.json({ message: 'Porfavor envie todos los parametros' })
    }

    const objSubject = { name }

    const connection = await getConnectionDb()
    const result = await connection.query('UPDATE subject SET ? WHERE id=?', [objSubject, id])
    res.json(result)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const deletedSubjectById = async (req, res) => {
  try {
    const { id } = req.params
    const connection = await getConnectionDb()
    const result = await connection.query('DELETE FROM subject WHERE id=?', id)
    res.json(result)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

export const subjectsController = {
  getSubjects,
  getSubjectById,
  addSubject,
  updateSubject,
  deletedSubjectById
}

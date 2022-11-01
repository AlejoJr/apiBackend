import getConnectionDb from '../connections/database'

const getStudents = async (req, res) => {
  try {
    const connection = await getConnectionDb()
    const result = await connection.query('SELECT * FROM student')
    res.json(result)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const getStudentById = async (req, res) => {
  try {
    const { id } = req.params
    const connection = await getConnectionDb()
    const result = await connection.query('SELECT * FROM student WHERE id=?', id)
    res.json(result)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const addStudent = async (req, res) => {
  try {
    const { name, lastName, dateOfBirth } = req.body

    if (name === undefined || lastName === undefined || dateOfBirth === undefined) {
      res.status(500)
      return res.json({ message: 'Porfavor envie todos los parametros' })
    }

    const student = { name, lastName, dateOfBirth }
    const connection = await getConnectionDb()
    const result = await connection.query('INSERT INTO student SET ?', student)

    res.json({ message: 'Estudiante añadido', result })
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const updateStudent = async (req, res) => {
  try {
    const { id } = req.params
    const { name, lastName, dateOfBirth } = req.body

    if (name === undefined || lastName === undefined || dateOfBirth === undefined) {
      res.status(500)
      return res.json({ message: 'Porfavor envie todos los parametros' })
    }

    const objStudent = { name, lastName, dateOfBirth }

    const connection = await getConnectionDb()
    const result = await connection.query('UPDATE student SET ? WHERE id=?', [objStudent, id])
    res.json(result)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const deletedStudentById = async (req, res) => {
  try {
    const { id } = req.params
    const connection = await getConnectionDb()
    const result = await connection.query('DELETE FROM student WHERE id=?', id)
    res.json(result)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

export const studentsController = {
  getStudents,
  getStudentById,
  addStudent,
  updateStudent,
  deletedStudentById
}

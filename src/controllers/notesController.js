import getConnectionDb from '../connections/database'

const getAllNotes = async (req, res) => {
  try {
    const connection = await getConnectionDb()
    const result = await connection.query('SELECT * FROM note')
    res.json(result)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const getNotesByStudentId = async (req, res) => {
  try {
    const { id } = req.params
    const connection = await getConnectionDb()
    const result = await connection.query('CALL GetAllNotesOfAStudent(?)', id, function (err, rows, fields) {
      if (err) {
        res.status(400).send(err)
      }
      res.status(200).json(rows[0])
    })
    res.json(result)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const getNoteByStudentId = async (req, res) => {
  try {
    const { idStu, idSub } = req.params
    const connection = await getConnectionDb()
    const result = await connection.query('CALL GetAllNoteOfAStudent(?,?)', [idStu, idSub], function (err, rows, fields) {
      if (err) {
        res.status(400).send(err)
      }
      res.status(200).json(rows[0])
    })
    res.json(result)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const addStudentNote = async (req, res) => {
  try {
    const { subjectId, qualification, examDate, studentId } = req.body

    console.log(req.body, '<-- llega el objeto')

    if (subjectId === undefined || qualification === undefined || examDate === undefined || studentId === undefined) {
      res.status(500)
      return res.json({ message: 'Porfavor envie todos los parametros' })
    }

    const note = { subjectId, qualification, examDate, studentId }
    const connection = await getConnectionDb()
    const result = await connection.query('INSERT INTO note SET ?', note)

    res.json({ message: 'Created-OK', result })
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const updateStudentNote = async (req, res) => {
  try {
    const { idStudent, idSubject } = req.params
    const { qualification, examDate } = req.body

    if (qualification === undefined) {
      res.status(500)
      return res.json({ message: 'Porfavor envie todos los parametros' })
    }

    const note = { qualification, examDate }

    const connection = await getConnectionDb()
    const result = await connection.query('UPDATE note SET ? WHERE studentId=? and subjectId=?', [note, idStudent, idSubject])
    res.json({ message: 'Updated-OK', result })
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const deleteStudentNote = async (req, res) => {
  try {
    const { id } = req.params
    const connection = await getConnectionDb()
    const result = await connection.query('DELETE FROM note WHERE id=?', id)
    res.json(result)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

export const notesController = {
  getAllNotes,
  getNotesByStudentId,
  getNoteByStudentId,
  addStudentNote,
  updateStudentNote,
  deleteStudentNote
}

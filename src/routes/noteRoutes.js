import { Router } from 'express'
import { notesController } from '../controllers/notesController'

const routerNote = Router()

routerNote.get('/', notesController.getAllNotes)
routerNote.get('/:id', notesController.getNotesByStudentId)
routerNote.get('/:idStu/:idSub', notesController.getNoteByStudentId)
routerNote.post('/', notesController.addStudentNote)
routerNote.put('/:idStudent/:idSubject', notesController.updateStudentNote)
routerNote.delete('/:id', notesController.deleteStudentNote)

export default routerNote

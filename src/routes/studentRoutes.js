import { Router } from 'express'
import { studentsController } from '../controllers/studentsController'

const routerStudent = Router()

routerStudent.get('/', studentsController.getStudents)
routerStudent.get('/:id', studentsController.getStudentById)
routerStudent.post('/', studentsController.addStudent)
routerStudent.put('/:id', studentsController.updateStudent)
routerStudent.delete('/:id', studentsController.deletedStudentById)

export default routerStudent

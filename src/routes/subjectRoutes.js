import { Router } from 'express'
import { subjectsController } from '../controllers/subjectsController'

const routerSubject = Router()

routerSubject.get('/', subjectsController.getSubjects)
routerSubject.get('/:id', subjectsController.getSubjectById)
routerSubject.post('/', subjectsController.addSubject)
routerSubject.put('/:id', subjectsController.updateSubject)
routerSubject.delete('/:id', subjectsController.deletedSubjectById)

export default routerSubject

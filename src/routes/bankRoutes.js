import { Router } from 'express'
import { bankController } from '../controllers/bankController'

const routerBank = Router()

routerBank.get('/', bankController.getObjectDb)
routerBank.get('/:id', bankController.getObjectDbById)
routerBank.post('/', bankController.addObjectDb)
routerBank.put('/:id', bankController.updateObjectDbId)
routerBank.delete('/:id', bankController.deletedObjectDbId)

export default routerBank

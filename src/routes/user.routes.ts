import { Router } from 'express'
const routes = Router()

//controllers
import userCreateController from '../controllers/createUser.controllers'
import listUserController from '../controllers/listUser.controllers'
import listOneUserController from '../controllers/ListOneUser.controllers'
import updateUserController from '../controllers/updateUser.controllers'
import deleteUserController from '../controllers/deleteUser.controllers'

//middlewares
import verifyIdExists from '../middlewares/verifyIdExists.middleware'
import verifyLength from '../middlewares/verifyLength.middleware'

//routes
routes.post('/users',userCreateController)
routes.get('/users',/* verifyLength, */listUserController)
routes.get('/users/:id',listOneUserController)
routes.patch('/users/:id',verifyIdExists,updateUserController)
routes.delete('/users/:id',deleteUserController)

export default routes
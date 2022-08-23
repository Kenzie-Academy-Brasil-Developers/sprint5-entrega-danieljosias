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


//routes
routes.post('/users',userCreateController)
routes.get('/users',listUserController)
routes.get('/users/:id',verifyIdExists,listOneUserController)
routes.patch('/users/:id',verifyIdExists,updateUserController)
routes.delete('/users/:id',verifyIdExists,deleteUserController)

export default routes
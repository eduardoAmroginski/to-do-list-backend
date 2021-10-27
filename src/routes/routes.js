import { Router } from 'express'

import TaskController from '../controllers/TaskController'
import UserController from '../controllers/UserController'

const routes = Router()

// TASKS
routes.get('/tasks', TaskController.index)
routes.get('/tasks/:id', TaskController.getTask, TaskController.getById)
routes.post('/tasks', TaskController.store)
routes.patch('/tasks/:id', TaskController.getTask, TaskController.update)
routes.delete('/tasks/:id', TaskController.getTask, TaskController.delete)

// Users
routes.get('/users', UserController.index)
routes.get('/users/:id', UserController.getUser, UserController.getById)
routes.post('/users', UserController.store)
routes.patch('/users/:id', UserController.getUser, UserController.update)
routes.delete('/users/:id', UserController.getUser, UserController.delete)

export default routes

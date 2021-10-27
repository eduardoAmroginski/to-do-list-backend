import { Request, Response } from 'express'

import Task from '../models/Task'

class TaskController {
  public async index (request: Request, response: Response): Promise<Response> {
    const tasks = await Task.find()

    return response.json(tasks)
  }

  public async getById (request: Request, response: Response): Promise<Response> {
    response.json(response.task)
  }

  public async store (request: Request, response: Response): Promise<Response> {
    const task = await Task.create(request.body)
    return response.json(task)
  }

  public async update (request: Request, response: Response): Promise<Response> {
    if (request.body.name != null) {
      response.task.name = request.body.name
    }
    if (request.body.description != null) {
      response.task.description = request.body.description
    }

    if (request.body.done != null) {
      response.task.done = request.body.done
    }

    try {
      const updateTask = await response.task.save()
      response.json(updateTask)
    } catch (error) {
      return response.status(400).json({ message: error.message })
    }
  }

  public async delete (request: Request, response: Response): Promise<Response> {
    try {
      await response.task.remove()
      response.json({ message: 'Subscriber was deleted' })
    } catch (error) {
      response.status(500).json({ message: error.message })
    }
  }

  public async getTask (request, response, next) { // Middleware
    try {
      const task = await Task.findById(request.params.id)
      if (task == null) {
        return response.status(404).json({ message: 'Task Not Found!' })
      }
      response.task = task
    } catch (error) {
      return response.status(500).json({ message: error.message })
    }
    next()
  }
}

export default new TaskController()

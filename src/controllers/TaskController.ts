import { NextFunction, Request, Response } from 'express'

import Task, { TaskInterface } from '../models/Task'

interface CustomResponse extends Response {
  task?: TaskInterface
}

class TaskController {
  public async index (response: Response): Promise<Response> {
    try {
      const tasks = await Task.find()
      return response.status(200).json(tasks)
    } catch (error) {
      return response.status(500).json({ message: 'Failed to fetch tasks' })
    }
  }

  public async getById (request: Request, response: CustomResponse): Promise<Response> {
    return response.status(200).json(response.task)
  }

  public async store (request: Request, response: Response): Promise<Response> {
    try {
      const task = new Task(request.body)
      await task.save()
      return response.status(201).json(task)
    } catch (error) {
      return response.status(400).json({ message: 'Failed to create task', error: error.message })
    }
  }

  public async update (request: Request, response: CustomResponse): Promise<Response> {
    const { name, description, done } = request.body

    if (name != null) response.task!.name = name
    if (description != null) response.task!.description = description
    if (done != null) response.task!.done = done

    try {
      const updatedTask = await response.task!.save()
      return response.status(200).json(updatedTask)
    } catch (error) {
      return response.status(400).json({ message: 'Failed to update task', error: error.message })
    }
  }

  // Deletar uma task
  public async delete(request: Request, response: CustomResponse): Promise<Response> {
    try {
      await response.task!.remove()
      return response.status(200).json({ message: 'Task was successfully deleted' })
    } catch (error) {
      return response.status(500).json({ message: 'Failed to delete task', error: error.message })
    }
  }

  public async getTask(request: Request, response: CustomResponse, next: NextFunction) {
    try {
      const task = await Task.findById(request.params.id)
      if (!task) {
        return response.status(404).json({ message: 'Task not found' })
      }
      response.task = task
      next()
    } catch (error) {
      return response.status(500).json({ message: 'Failed to retrieve task', error: error.message })
    }
  }
}

export default new TaskController()

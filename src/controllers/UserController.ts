import { Request, Response } from 'express'

import User from '../models/User'

class UserController {
  public async index (request: Request, response: Response): Promise<Response> {
    const users = await User.find()

    return response.json(users)
  }

  public async getById (request: Request, response: Response): Promise<Response> {
    response.json(response.user)
  }

  public async store (request: Request, response: Response): Promise<Response> {
    const user = await User.create(request.body)
    return response.json(user)
  }

  public async update (request: Request, response: Response): Promise<Response> {
    if (request.body.username != null) {
      response.user.username = request.body.username
    }

    if (request.body.email != null) {
      response.user.email = request.body.email
    }

    if (request.body.password != null) {
      response.user.password = request.body.password
    }

    try {
      const updateUser = await response.user.save()
      response.json(updateUser)
    } catch (error) {
      return response.status(400).json({ message: error.message })
    }
  }

  public async delete (request: Request, response: Response): Promise<Response> {
    try {
      await response.user.remove()
      response.json({ message: 'User was deleted' })
    } catch (error) {
      response.status(500).json({ message: error.message })
    }
  }

  public async getUser (request, response, next) { // Middleware
    try {
      const user = await User.findById(request.params.id)
      if (user == null) {
        return response.status(404).json({ message: 'User Not Found!' })
      }
      response.user = user
    } catch (error) {
      return response.status(500).json({ message: error.message })
    }
    next()
  }
}

export default new UserController()

import { CreateCategoryUseCase } from './CreateCategoryUseCase'

// types
import type { Request, Response } from 'express'

class CreateCategoryController {
  #createCategoryUseCase: CreateCategoryUseCase

  constructor(createCategoryUseCase: CreateCategoryUseCase) {
    this.#createCategoryUseCase = createCategoryUseCase
  }

  handle(request: Request, response: Response) {
    const { name, description } = request.body

    this.#createCategoryUseCase.execute({ name, description })

    return response.status(201).send()
  }
}

export { CreateCategoryController }
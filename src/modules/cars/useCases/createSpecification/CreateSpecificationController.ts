import { CreateSpecificationUseCase } from './CreateSpecificationUseCase'

// types
import type { Request, Response } from 'express'

class CreateSpecificationController {
  #specificationUseCase: CreateSpecificationUseCase

  constructor(specificationUseCase: CreateSpecificationUseCase) {
    this.#specificationUseCase = specificationUseCase
  }

  handle(request: Request, response: Response) {
    const { name, description } = request.body

    this.#specificationUseCase.execute({ name, description })

    return response.status(201).send()
  }
}

export { CreateSpecificationController }
import { ListCategoryUseCase } from './ListCategoriesUseCase'

// types
import type { Request, Response } from 'express'

class ListCategoriesController {
  #listCategoriesUseCase: ListCategoryUseCase

  constructor(listCategoriesUseCase: ListCategoryUseCase) {
    this.#listCategoriesUseCase = listCategoriesUseCase
  }

  async handle(request: Request, response: Response) {
    const categories = await this.#listCategoriesUseCase.execute()

    return response.json(categories)
  }
}

export { ListCategoriesController }
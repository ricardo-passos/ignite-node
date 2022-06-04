import { ImportCategoryUseCase } from './ImportCategoryUseCase'

// types
import type { Request, Response } from 'express'

class ImportCategoryController {
  #importCategoryUseCase: ImportCategoryUseCase

  constructor(importCategoryUseCase: ImportCategoryUseCase) {
    this.#importCategoryUseCase = importCategoryUseCase
  }

  async handle(request: Request, response: Response) {
    const { file } = request

    if (!file) {
      throw new Error("File hasn't been sent")
    }

    await this.#importCategoryUseCase.execute(file)

    return response.send()
  }
}

export { ImportCategoryController }
import { parse } from 'csv-parse'
import fs from 'node:fs'
import { pipeline } from 'node:stream/promises'
import { CategoriesRepository } from '../../repositories/implementatios/CategoriesRepository'

interface IImportCategory {
  name: string
  description: string
}

class ImportCategoryUseCase {
  #categoriesRepository: CategoriesRepository

  constructor(categoriesRepository: CategoriesRepository) {
    this.#categoriesRepository = categoriesRepository
  }

  async #loadCategories(file: Express.Multer.File) {
    const categories: IImportCategory[] = []

    await pipeline(fs.createReadStream(file.path), parse().on('data', (line: string[]) => {
      const [name, description] = line

      categories.push({ name, description })
    }))

    await fs.promises.unlink(file.path)

    return categories
  }

  async execute(file: Express.Multer.File) {
    const categories = await this.#loadCategories(file)

    categories.map((category) => {
      const { name, description } = category

      const categoryExists = this.#categoriesRepository.findByName(name)

      if (!categoryExists) {
        this.#categoriesRepository.create({ name, description })
      }
    })
  }
}

export { ImportCategoryUseCase }
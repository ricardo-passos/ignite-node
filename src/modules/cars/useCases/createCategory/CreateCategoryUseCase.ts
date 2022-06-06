// repositories
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository'

interface IRequest {
  name: string,
  description: string
}

class CreateCategoryUseCase {
  #categoriesRepository: ICategoriesRepository

  constructor(categoriesRepository: ICategoriesRepository) {
    this.#categoriesRepository = categoriesRepository
  }

  async execute({ name, description }: IRequest) {
    const category = await this.#categoriesRepository.findByName(name)

    if (category) {
      throw new Error("Category alread exists.")
    }

    await this.#categoriesRepository.create({ name, description })
  }
}

export { CreateCategoryUseCase }
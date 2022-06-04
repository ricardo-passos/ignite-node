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

  execute({ name, description }: IRequest) {
    const category = this.#categoriesRepository.findByName(name)

    if (category) {
      throw new Error("Category alread exists.")
    }

    this.#categoriesRepository.create({ name, description })
  }
}

export { CreateCategoryUseCase }
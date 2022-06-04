import { ICategoriesRepository } from '../../repositories/ICategoriesRepository'

class ListCategoryUseCase {
  #categoriesRepository: ICategoriesRepository

  constructor(categoriesRepository: ICategoriesRepository) {
    this.#categoriesRepository = categoriesRepository
  }

  execute() {
    return this.#categoriesRepository.list()
  }
}

export { ListCategoryUseCase }
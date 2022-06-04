import { Category } from '../../models/CategoryModel'
import { ICategoriesRepository, ICreateCategoryDTO } from '../ICategoriesRepository'

class CategoriesRepository implements ICategoriesRepository {
  #categories: Category[]
  static #INSTANCE: CategoriesRepository

  private constructor() {
    this.#categories = []
  }

  static get instance() {
    if (!this.#INSTANCE) {
      CategoriesRepository.#INSTANCE = new CategoriesRepository()
    }

    return this.#INSTANCE
  }

  create({ name, description }: ICreateCategoryDTO) {
    const category = new Category({ name, description })

    this.#categories.push(category)
  }

  list() {
    return this.#categories
  }

  findByName(name: string) {
    return this.#categories.find((category) => category.name === name)
  }
}

export { CategoriesRepository }
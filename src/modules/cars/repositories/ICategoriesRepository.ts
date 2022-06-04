// types
import type { Category } from '../models/CategoryModel';

interface ICreateCategoryDTO {
  name: string,
  description: string
}

interface ICategoriesRepository {
  findByName(name: string): Category | undefined
  list(): Category[]
  create({ name, description }: ICreateCategoryDTO): void
}

export { ICategoriesRepository, ICreateCategoryDTO }
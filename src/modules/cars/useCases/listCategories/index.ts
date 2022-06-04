import { CategoriesRepository } from '../../repositories/implementatios/CategoriesRepository';
import { ListCategoriesController } from './ListCategoriesController';
import { ListCategoryUseCase } from './ListCategoriesUseCase';

const categoriesRepository = CategoriesRepository.instance
const listCategoriesUseCase = new ListCategoryUseCase(categoriesRepository)
const listCategoriesController = new ListCategoriesController(listCategoriesUseCase)

export { listCategoriesController }
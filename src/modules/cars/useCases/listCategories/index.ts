import { CategoriesRepository } from '../../repositories/implementatios/CategoriesRepository';
import { ListCategoriesController } from './ListCategoriesController';
import { ListCategoryUseCase } from './ListCategoriesUseCase';

function controller() {
	const categoriesRepository = new CategoriesRepository()
	const createCategoryUseCase = new ListCategoryUseCase(categoriesRepository)
	const createCategoryController = new ListCategoriesController(
		createCategoryUseCase
	)

	return createCategoryController
}

export default controller
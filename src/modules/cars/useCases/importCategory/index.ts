import { CategoriesRepository } from '../../repositories/implementatios/CategoriesRepository';
import { ImportCategoryController } from './ImportCategoryController';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';

function controller() {
	const categoriesRepository = new CategoriesRepository()
	const createCategoryUseCase = new ImportCategoryUseCase(categoriesRepository)
	const createCategoryController = new ImportCategoryController(
		createCategoryUseCase
	)

	return createCategoryController
}

export default controller
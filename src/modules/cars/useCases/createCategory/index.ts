import { CategoriesRepository } from '../../repositories/implementatios/CategoriesRepository'
import { CreateCategoryController } from './CreateCategoryController'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'

function controller() {
	const categoriesRepository = new CategoriesRepository()
	const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)
	const createCategoryController = new CreateCategoryController(
		createCategoryUseCase
	)

	return createCategoryController
}

export default controller

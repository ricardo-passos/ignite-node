import { Router } from 'express'
import multer from 'multer'

// repositories
import createCategoryController from '../modules/cars/useCases/createCategory'
import listCategoriesController from '../modules/cars/useCases/listCategories'
import importCategoryController from '../modules/cars/useCases/importCategory'

const categoriesRoutes = Router()
const upload = multer({
	dest: './tmp',
})

categoriesRoutes.post('/', async (request, response) => {
	return await createCategoryController().handle(request, response)
})

categoriesRoutes.get('/', async (request, response) => {
	return await listCategoriesController().handle(request, response)
})

categoriesRoutes.post(
	'/import',
	upload.single('file'),
	async (request, response) => {
		return await importCategoryController().handle(request, response)
	}
)

export { categoriesRoutes }

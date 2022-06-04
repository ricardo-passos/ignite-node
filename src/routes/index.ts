import { Router } from 'express'

// routes
import { categoriesRoutes } from './categoriesRoute'
import { specificationsRoutes } from './specificationsRoute'

const routes = Router()

routes.use('/categories', categoriesRoutes)
routes.use('/specifications', specificationsRoutes)

export { routes }
import express from 'express'
import swaggerUi from 'swagger-ui-express'

// routes
import { routes } from './routes'

// docs
import swaggerFile from './swagger.json'

// database
import "./database"

const app = express()
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(routes)

app.listen(3000)

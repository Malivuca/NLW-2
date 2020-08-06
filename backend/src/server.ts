require('dotenv').config()

import express from 'express'
import cors from 'cors'
import routes from './routes'

const port = process.env.SERVER_PORT

const app = express()

app.use(cors())

app.use(express.json()) // Converts the request body to JSON format

app.use(routes)

/* rota: http://algumsite.com
 * recurso: /users, /contacts (a parte final da URL)
 * basic http methods:
 * * GET: Request information from server
 * * POST: Create new information on the server
 * * PUT: Update and existing information on the server
 * * DELETE: Delete an existing information on the server
 * params:
 * * Body:
 * * Headers:
 * * Route params: Identify which resource is being updated
 * * * /users/:id ":id" is a route param
 * * * request.params
 * * Query params: Used for pagination, filters, ordering
 * * * /users?page=2&sort=name
 * * * request.query
 */

app.listen(port)

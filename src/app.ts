import express from 'express'
import routes from './routes/user.routes'

export const app = express()
app.use(express.json())
app.use(routes)

app.listen(3000)
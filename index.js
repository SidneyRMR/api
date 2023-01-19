import express from "express"
import userRoutes from "./routes/acessos"
import cors from "cors"
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

// rota para acessar api pelo navegador ou front-end
app.use("/", userRoutes)

//define em que porta que será disponibilizado a api da consulta/query
const port = 8800
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })
import mysql from "mysql"
import dotenv from 'dotenv'

dotenv.config()

export const db = mysql.createConnection({
    // host: 'localhost',
    // user: "igreja-api",
    // password: "123456",
    // database: "bd_igreja_vendas_v1"
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE
})

//configurar rotas para usuarios
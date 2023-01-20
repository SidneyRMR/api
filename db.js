import mysql from "mysql"
import dotenv from 'dotenv'

dotenv.config()

export const db = mysql.createConnection({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    // port: process.env.MYSQLPORT
})

//configurar rotas para usuarios
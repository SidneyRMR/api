import mysql from "mysql2/promise"
import dotenv from 'dotenv'

// dotenv.config()

export const pool = await mysql.createPool({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    // port: process.env.MYSQLPORT
})

//configurar rotas para usuarios
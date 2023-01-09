import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bd_igreja_vendas_v1"
})

//configurar rotas para usuarios
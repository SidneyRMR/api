import {pool} from "../db"


// por ser metodo get não precisa enviar o request
export const getUsers = (_, res) => {
    const q = "SELECT * FROM tb_usuarios"

// console.log({
//     host: process.env.MYSQLHOST,
//     user: process.env.MYSQLUSER,
//     password: process.env.MYSQLPASSWORD,
//     database: process.env.MYSQLDATABASE
// })
    //este codigo acessa o bd.tb_usuarios e carrega os valores, caso dê erro, retorna o codigo de erro
    pool.query(q, (err, data) => {
        if (err) return res.json(err)
        //em 'data' carrega a listagem de todos os usuarios
        //e retorna como resposta de quem requisitar esta api
        return res.status(200).json(data)
    })
}
// faz o requerimento somente de um usuario
export const getUser = (_, res) => {
    const q = "SELECT * FROM tb_usuarios WHERE id_usuario = ?"

    pool.query(q, [id_usuario], (err, data) => {
        if (err) return res.json(err)
        return res.status(200).json(data)
    })
}

export const addUser = (req, res) => {
    const q = "INSERT INTO tb_usuarios(nome_usuario, login, senha, tipo) VALUES ?"

    const values = [[
        req.body.nome_usuario,
        req.body.login,
        req.body.senha,
        req.body.tipo,
    ]]

    pool.query(q, [values], (err) => {
        if(err) return res.json(err)

        return res.status(200).json('Usuário criado com sucesso!')
    })

}
export const updateUser = (req, res) => {
    const q = "UPDATE tb_usuarios SET id_usuario = ?, nome_usuario = ?, login = ?, tipo = ? WHERE id_usuario = ?"

    const values = [
        req.body.id_usuario,
        req.body.nome_usuario,
        req.body.login,
        // req.body.senha,
        req.body.tipo,
    ]

    pool.query(q, [...values, req.params.id_usuario], (err) => {
        if(err) return res.json(err)

        return res.status(200).json('Usuário atualizado com sucesso!')
    })
}

// Deletar usuario funcionando!
export const deleteUser = (req, res) => {
    const q = "DELETE FROM tb_usuarios WHERE `id_usuario` = ?"

    pool.query(q, [req.params.id], (err) => {
        if(err) return res.json(err)

        return res.status(200).json('Usuário deletado com sucesso!')
    })

}
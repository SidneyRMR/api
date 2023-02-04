import {pool} from "../db"




export const getUsers = (_, res) => {
    const q = "SELECT * FROM tb_usuarios"//este codigo acessa o bd.tb_usuarios e carrega os valores, caso dê erro, retorna o codigo de erro
    pool.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.status(200).json(data)
    })
}


export const addUser = (req, res) => {
    const q = "INSERT INTO tb_usuarios(nome_usuario, login, senha, id_festa, tipo) VALUES ?"

    const values = [[
        req.body.nome_usuario,
        req.body.login,
        req.body.senha,
        req.body.id_festa,
        req.body.tipo, 
    ]]

    pool.query(q, [values], (err) => {
        if(err) return res.json(err)
        return res.status(200).json('Usuário criado com sucesso!')
    })

}
export const updateUser = (req, res) => {
    const q = "UPDATE tb_usuarios SET id_usuario = ?, nome_usuario = ?, login = ?, id_festa = ?, tipo = ? WHERE id_usuario = ?"

    const values = [
        req.body.id_usuario,
        req.body.nome_usuario,
        req.body.login,
        req.body.id_festa,
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

    pool.query(q, [req.params.id_usuario], (err) => {
        if(err) return res.json(err)

        return res.status(200).json('Usuário deletado com sucesso!')
    })

}
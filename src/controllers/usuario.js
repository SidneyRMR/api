import {pool} from "../db"




export const getUsers = (_, res) => {
    pool.getConnection((err, connection) => {
        const q = "SELECT * FROM tb_usuarios"
        if (err) return res.status(500).json({ error: err });
        connection.query(q, (err, data) => {
            connection.release();
            if (err) return res.status(500).json({ error: err });
            res.status(200).json(data);
        });
    });
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
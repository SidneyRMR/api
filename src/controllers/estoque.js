import {pool} from "../db"


// por ser metodo get não precisa enviar o request
export const getEstoque = (_, res) => {
    const q = "SELECT * FROM tb_estoque"
    pool.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.status(200).json(data)
    })
}

export const addEstoque = (req, res) => {
    const q = 'INSERT INTO tb_estoque (id_festa, id_produto, qtde_vendida, qtde_estoque) VALUES ?'
    const values = [
        [
            req.body.id_festa, 
            req.body.id_produto, 
            req.body.qtde_vendida, 
            req.body.qtde_estoque,
        ]
    ]
    pool.query(q, [values], (err) => {
      if (err) return res.json(err)
      return res.status(200).json('Estoque criado com sucesso!')
    })
  }
  
export const updateEstoque  = async (req, res) => {
    const q = "UPDATE tb_estoque SET id_estoque = ?, id_festa = ?, id_produto = ?, qtde_vendida = ?, qtde_estoque = ? WHERE id_estoque = ?"

    const values = [
        req.body.id_estoque,
        req.body.id_festa, 
        req.body.id_produto, 
        req.body.qtde_vendida, 
        req.body.qtde_estoque,
    ]

    await pool.query  (q, [...values, req.params.id_estoque], (err) => {
        if(err) return res.json(err)
        return res.status(200).json('Produto atualizado com sucesso!')
    })
}

export const deleteEstoque = (req, res) => {
    const q = "DELETE FROM tb_estoque WHERE `id_estoque` = ?"

    pool.query(q, [req.params.id_estoque], (err) => {
        if(err) return res.json(err)

        return res.status(200).json('Produto deletado com sucesso!')
    })

}

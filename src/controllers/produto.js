import {pool} from "../db"


// por ser metodo get não precisa enviar o request
export const getProducts = (_, res) => {
    const q = "SELECT * FROM tb_produtos"
    pool.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.status(200).json(data)
    })
}

export const addProducts = (req, res) => {
    const q = 'INSERT INTO tb_produtos (nome, preco, medida, tipo, ativo) VALUES ?'
    ativo: true
    const values = [
        [
            req.body.nome, 
            req.body.preco, 
            req.body.medida, 
            req.body.tipo,
            req.body.ativo,
            
        ]
    ]
    pool.query(q, [values], (err) => {
      if (err) return res.json(err)
      return res.status(200).json('Produto criado com sucesso!')
    })
  }
  
export const updateProducts  = async (req, res) => {
    const q = "UPDATE tb_produtos SET id_produto = ?, nome = ?, preco = ?, medida = ?, tipo = ?, ativo = ? WHERE id_produto = ?"

    const values = [
        req.body.id_produto,
        req.body.nome,
        req.body.preco,
        req.body.medida,
        req.body.tipo,
        req.body.ativo,
    ]

    await pool.query  (q, [...values, req.params.id_produto], (err) => {
        if(err) return res.json(err)
        return res.status(200).json('Produto atualizado com sucesso!')
    })
}

export const deleteProducts = (req, res) => {
    const q = "DELETE FROM tb_produtos WHERE `id_produto` = ?"

    pool.query(q, [req.params.id_produto], (err) => {
        if(err) return res.json(err)

        return res.status(200).json('Produto deletado com sucesso!')
    })

}

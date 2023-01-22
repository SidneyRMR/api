import {db} from "../db"


// por ser metodo get não precisa enviar o request
export const getVendasProdutos = (_, res) => {
    const q = "SELECT * FROM tb_vendas_produtos"

    //este codigo acessa o bd.tb_vendas_produtos e carrega os valores, caso dê erro, retorna o codigo de erro
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        //em 'data' carrega a listagem de todos os compras
        //e retorna como resposta de quem requisitar esta api
        return res.status(200).json(data)
    })
}

export const addVendasProdutos = (req, res) => {
    const q = 'INSERT INTO tb_vendas_produtos ( id_produto, nome, medida, preco, qtde_venda_produto, id_venda) VALUES ?'
  
    const values = [
      [
        req.body.id_produto, 
        req.body.nome, 
        req.body.medida,
        req.body.preco,
        req.body.qtde_venda_produto,
        req.body.id_venda
      ],
    ]
    db.query(q, [values], (err) => {
      if (err) return res.json(err)
      return res.status(200).json('Venda criada com sucesso!')
    })
  }
  
export const updateVendasProdutos = (req, res) => {
    const q = "UPDATE tb_vendas_produtos SET id_venda_produto = ?, id_produto = ?, nome = ?, medida = ?, preco = ?, qtde_venda_produto = ?, id_venda  = ? WHERE id_venda_produto = ?"

    const values = [
      req.body.id_venda_produto, 
      req.body.id_produto, 
      req.body.nome, 
      req.body.medida,
      req.body.preco,
      req.body.qtde_venda_produto,
      req.body.id_venda
    ]

    db.query(q, [...values, req.params.id_venda_produto], (err) => {
        if(err) return res.json(err)

        return res.status(200).json('Venda atualizada com sucesso!')
    })
}

export const deleteVendasProdutos = (req, res) => {
    const q = "DELETE FROM tb_vendas_produtos WHERE `id_venda_produto` = ?"

    db.query(q, [req.params.id], (err) => {
        if(err) return res.json(err)

        return res.status(200).json('Venda deletada com sucesso!')
    })

}

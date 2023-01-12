import {db} from "../db"


// por ser metodo get não precisa enviar o request
export const getVendasPgto = (_, res) => {
    const q = "SELECT * FROM tb_vendas_pgto"

    //este codigo acessa o bd.tb_vendas_pgto e carrega os valores, caso dê erro, retorna o codigo de erro
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        //em 'data' carrega a listagem de todos os compras
        //e retorna como resposta de quem requisitar esta api
        return res.status(200).json(data)
    })
}

export const addVendasPgto = (req, res) => {
    const q = 'INSERT INTO tb_vendas_pgto (id_venda, id_forma, valor_pgto) VALUES ?'
  
    const values = [
      [
        req.body.id_venda, 
        req.body.id_forma, 
        req.body.valor_pgto
      ],
    ]
    db.query(q, [values], (err) => {
      if (err) return res.json(err)
      return res.status(200).json('Venda criada com sucesso!')
    })
  }
  
export const updateVendasPgto = (req, res) => {
    const q = "UPDATE tb_vendas_pgto SET id_venda_pgto = ?, id_venda  = ?, id_forma = ?, valor_pgto = ? WHERE id_venda_pgto = ?"

    const values = [
      req.body.id_venda_pgto, 
      req.body.id_venda, 
      req.body.id_forma, 
      req.body.valor_pgto, 
    ]

    db.query(q, [...values, req.params.id_venda_pgto], (err) => {
        if(err) return res.json(err)

        return res.status(200).json('Venda atualizada com sucesso!')
    })
}

export const deleteVendasPgto = (req, res) => {
    const q = "DELETE FROM tb_vendas_pgto WHERE `id_venda_pgto` = ?"

    db.query(q, [req.params.id], (err) => {
        if(err) return res.json(err)

        return res.status(200).json('Venda deletada com sucesso!')
    })

}

import {pool} from "../db"


// por ser metodo get não precisa enviar o request
export const getVendas = (_, res) => {
    const q = "SELECT * FROM tb_vendas"

    //este codigo acessa o bd.tb_vendas e carrega os valores, caso dê erro, retorna o codigo de erro
    pool.query(q, (err, data) => {
        if (err) return res.json(err)
        //em 'data' carrega a listagem de todos os vendas
        //e retorna como resposta de quem requisitar esta api
        return res.status(200).json(data)
    })
}

export const addVendas = (req, res) => {
    const q = 'INSERT INTO tb_vendas (id_caixa, hora_venda, credito, debito, dinheiro, pix) VALUES ?'
  
    const values = [
      [
        req.body.id_caixa, 
        req.body.hora_venda, 
        req.body.credito, 
        req.body.debito, 
        req.body.dinheiro, 
        req.body.pix, 
      ],
    ]
    pool.query(q, [values], (err) => {
      if (err) return res.json(err)
      return res.status(200).json('Venda criada com sucesso!')
    })
  }
  

export const updateVendas = (req, res) => {
    const q = "UPDATE tb_vendas SET id_venda = ?, id_caixa = ?, hora_venda = ?, credito = ?, debito = ?, dinheiro = ?, pix = ? WHERE id_venda = ?"

    const values = [
      req.body.id_venda, 
      req.body.id_caixa, 
      req.body.hora_venda, 
      req.body.credito, 
      req.body.debito, 
      req.body.dinheiro, 
      req.body.pix, 
    ]

    pool.query(q, [...values, req.params.id_venda], (err) => {
        if(err) return res.json(err)

        return res.status(200).json('Venda atualizado com sucesso!')
    })
}

export const deleteVendas = (req, res) => {
    const q = "DELETE FROM tb_vendas WHERE `id_venda` = ?"

    pool.query(q, [req.params.id_venda], (err) => {
        if(err) return res.json(err)

        return res.status(200).json('Venda deletada com sucesso!')
    })

}

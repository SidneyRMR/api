import {pool} from "../db"


// Envia todos os caixa
export const getCaixas = (_, res) => {
    const q = "SELECT * FROM tb_caixas"
    pool.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.status(200).json(data)
    })
}

// Adiciona novo caixa
export const addCaixas = (req, res) => {
    const q = 'INSERT INTO tb_caixas (id_usuario, id_festa, abertura, status_caixa, data_abertura, hora_abertura, data_fechamento) VALUES ?'
  
    const values = [
      [
        req.body.id_usuario,
        req.body.id_festa, 
        req.body.abertura, 
        req.body.status_caixa,
        req.body.data_abertura, 
        req.body.hora_abertura, 
        req.body.data_fechamento
      ],
    ]
    pool.query(q, [values], (err) => {
      if (err) return res.json(err)
      return res.status(200).json('Caixa criado com sucesso!')
    })
  }
  
// Altera caixa
export const updateCaixas = (req, res) => {
    const q = "UPDATE tb_caixas SET id_caixa = ?, id_usuario = ?, id_festa = ?, abertura = ?, status_caixa = ?, data_abertura = ?, hora_abertura = ?, data_fechamento = ? WHERE id_caixa = ?"

    const values = [
      req.body.id_caixa, 
      req.body.id_usuario,
      req.body.id_festa, 
      req.body.abertura, 
      req.body.status_caixa,
      req.body.data_abertura, 
      req.body.hora_abertura, 
      req.body.data_fechamento, 
    ]

    pool.query(q, [...values, req.params.id_caixa], (err) => {
        if(err) return res.json(err)
        return res.status(200).json('Caixa atualizado com sucesso!')
    })
}

//Exclui caixa
export const deleteCaixas = (req, res) => {
    const q = "DELETE FROM tb_caixas WHERE `id_caixa` = ?"

    pool.query(q, [req.params.id_caixa], (err) => {
        if(err) return res.json(err)

        return res.status(200).json('Caixa deletado com sucesso!')
    })

}

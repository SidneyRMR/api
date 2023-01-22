import {db} from "../db"


// por ser metodo get não precisa enviar o request
export const getFestas = (_, res) => {
    const q = "SELECT * FROM tb_festas"

    //este codigo acessa o bd.tb_usuarios e carrega os valores, caso dê erro, retorna o codigo de erro
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        //em 'data' carrega a listagem de todos os usuarios
        //e retorna como resposta de quem requisitar esta api
        return res.status(200).json(data)
    })
}

export const addFestas = (req, res) => {
    const q = 'INSERT INTO tb_festas (nome_festa, data_inicio, data_termino) VALUES ?'
  
    const values = [
        [
            req.body.nome_festa, 
            req.body.data_inicio, 
            req.body.data_termino
        ],
    ]
    db.query(q, [values], (err) => {
      if (err) return res.json(err)
      return res.status(200).json('Festa criada com sucesso!')
    })
  }
  
export const updateFestas  = async (req, res) => {
    const q = "UPDATE tb_festas SET id_festa  = ?, nome_festa = ?, data_inicio = ?, data_termino = ? WHERE id_festa  = ?"

    const values = [
        req.body.id_festa ,
        req.body.nome_festa,
        req.body.data_inicio,
        req.body.data_termino,
    ]

    await db.query  (q, [...values, req.params.id_festa ], (err) => {
        if(err) return res.json(err)
        return res.status(200).json('Festa atualizada com sucesso!')
    })
}

export const deleteFestas = (req, res) => {
    const q = "DELETE FROM tb_festas WHERE `id_festa ` = ?"

    db.query(q, [req.params.id_festa ], (err) => {
        if(err) return res.json(err)

        return res.status(200).json('Produto deletado com sucesso!')
    })

}

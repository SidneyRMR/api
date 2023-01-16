import {db} from "../db"


// por ser metodo get não precisa enviar o request
export const getSangria = (_, res) => {
    const q = "SELECT * FROM tb_sangria"

    //este codigo acessa o bd.tb_usuarios e carrega os valores, caso dê erro, retorna o codigo de erro
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        //em 'data' carrega a listagem de todos os usuarios
        //e retorna como resposta de quem requisitar esta api
        return res.status(200).json(data)
    })
}

export const addSangria = (req, res) => {
    const q = 'INSERT INTO tb_sangria (id_caixa, valorSangria, descricao)  VALUES ?'
  
    const values = [
        [
            req.body.id_caixa, 
            req.body.valorSangria, 
            req.body.descricao
        ],
    ]
    db.query(q, [values], (err) => {
      if (err) return res.json(err)
      return res.status(200).json('Sangria criada com sucesso!')
    })
  }
  
export const updateSangria  = async (req, res) => {
    const q = "UPDATE tb_sangria SET id_sangria = ?, id_caixa = ?, valorSangria = ?, descricao = ? WHERE id_sangria = ?"

    const values = [
        req.body.id_sangria,
        req.body.id_caixa,
        req.body.valorSangria,
        req.body.descricao,
    ]

    await db.query  (q, [...values, req.params.id_sangria], (err) => {
        if(err) return res.json(err)
        return res.status(200).json('Sangria atualizada com sucesso!')
    })
}

export const deleteSangria = (req, res) => {
    const q = "DELETE FROM tb_sangria WHERE `id_sangria` = ?"

    db.query(q, [req.params.id_sangria], (err) => {
        if(err) return res.json(err)

        return res.status(200).json('Produto deletado com sucesso!')
    })

}

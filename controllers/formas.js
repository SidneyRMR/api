import {db} from "../db"


// por ser metodo get não precisa enviar o request
export const getFormas = (_, res) => {
    const q = "SELECT * FROM tb_formas"

    //este codigo acessa o bd.tb_usuarios e carrega os valores, caso dê erro, retorna o codigo de erro
    db.query(q, (err, data) => {
        if (err) return res.json(err)


        //em 'data' carrega a listagem de todos os usuarios
        //e retorna como resposta de quem requisitar esta api
        return res.status(200).json(data)
    })
}
import {db} from "../db"


// Envia todos os caixa
export const getCaixasUsuarios = (_, res) => {
    const q = "SELECT * FROM vw_caixas_usuarios"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.status(200).json(data)
    })
}


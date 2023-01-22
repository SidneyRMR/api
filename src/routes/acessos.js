import express from "express";
import {db} from '../db.js'
import { getUsers, getUser, addUser, updateUser, deleteUser } from "../controllers/usuario";
import { getProducts, addProducts, updateProducts, deleteProducts } from "../controllers/produto";
import { getFestas, addFestas, updateFestas, deleteFestas } from "../controllers/festa";
import { getCaixas, addCaixas, updateCaixas, deleteCaixas } from "../controllers/caixa";

import { getVendas, addVendas, updateVendas, deleteVendas } from "../controllers/venda";
import { getVendasProdutos, addVendasProdutos, updateVendasProdutos, deleteVendasProdutos } from "../controllers/vendas_produtos";
import { getSangria, addSangria, updateSangria, deleteSangria } from "../controllers/sangria";
import { getCaixasUsuarios } from "../controllers/vw_caixas_usuarios";

const router = express.Router()

// gerencia a rota em que será carregado os valores consultados do db

router.get("/status", (req, res) => {
    db.query('SELECT "Hello world" as RESULT')
    res.send('Running...')})

router.get("/usuarios", getUsers)
router.get("/usuarios/id_usuario", getUser)
router.post("/usuarios", addUser)
router.put("/usuarios/:id_usuario", updateUser)
router.delete("/usuarios/:id_usuario", deleteUser)

router.get("/produtos", getProducts)
router.post("/produtos", addProducts)
router.put("/produtos/:id_produto", updateProducts)
router.delete("/produtos/:id_produto", deleteProducts)

router.get("/festas", getFestas)
router.post("/festas", addFestas)
router.put("/festas/:id_festa", updateFestas)
router.delete("/festas/:id_festa", deleteFestas)

router.get("/caixas", getCaixas)
router.post("/caixas", addCaixas)
router.put("/caixas/:id_caixa", updateCaixas)
router.delete("/caixas/:id_caixa", deleteCaixas)

router.get("/vendas", getVendas)
router.post("/vendas", addVendas)
router.put("/vendas/:id_venda", updateVendas)
router.delete("/vendas/:id_venda", deleteVendas)

router.get("/vendasprodutos", getVendasProdutos)
router.post("/vendasprodutos", addVendasProdutos)
router.put("/vendasprodutos/:id_venda_produto", updateVendasProdutos)
router.delete("/vendasprodutos/:id_venda_produto ", deleteVendasProdutos)

router.get("/sangria", getSangria)
router.post("/sangria", addSangria)
router.put("/sangria/:id_sangria", updateSangria)
router.delete("/sangria/:id_sangria ", deleteSangria)

router.get("/vw_caixas_usuarios", getCaixasUsuarios)

export default router
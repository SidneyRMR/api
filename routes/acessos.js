import express from "express";
import { getUsers, getUser, addUser, updateUser, deleteUser } from "../controllers/usuario";
import { getProducts, addProducts, updateProducts, deleteProducts } from "../controllers/produto";
import { getCaixas, addCaixas, updateCaixas, deleteCaixas } from "../controllers/caixa";

import { getVendas, addVendas, updateVendas, deleteVendas } from "../controllers/venda";
import { getVendasProdutos, addVendasProdutos, updateVendasProdutos, deleteVendasProdutos } from "../controllers/vendas_produtos";
import { getCaixasUsuarios } from "../controllers/vw_caixas_usuarios";
import { getFormas } from "../controllers/formas";

const router = express.Router()

// gerencia a rota em que será carregado os valores consultados do db
// usa o metod get, requerimento

router.get("/usuarios", getUsers)
router.get("/usuarios/id_usuario", getUser)
router.post("/usuarios", addUser)
router.put("/usuarios/:id_usuario", updateUser)
router.delete("/usuarios/:id_usuario", deleteUser)

router.get("/produtos", getProducts)
router.post("/produtos", addProducts)
router.put("/produtos/:id_produto", updateProducts)
router.delete("/produtos/:id_produto", deleteProducts)

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

router.get("/vw_caixas_usuarios", getCaixasUsuarios)
router.get("/formas", getFormas)

export default router
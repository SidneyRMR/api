import express from "express";
import { getUsers, addUser, updateUser, deleteUser } from "../controllers/usuario";
import { getProducts, addProducts, updateProducts, deleteProducts } from "../controllers/produto";
import { getCaixas, addCaixas, updateCaixas, deleteCaixas } from "../controllers/caixa";

import { getVendas, addVendas, updateVendas, deleteVendas } from "../controllers/venda";
import { getVendasPgto, addVendasPgto, updateVendasPgto, deleteVendasPgto } from "../controllers/venda_pgto";
import { getFormas } from "../controllers/formas";

const router = express.Router()

// gerencia a rota em que será carregado os valores consultados do db
// usa o metod get, requerimento

router.get("/usuarios", getUsers)
router.post("/usuarios", addUser)
router.put("/usuarios/:id", updateUser)
router.delete("/usuarios/:id", deleteUser)

router.get("/produtos", getProducts)
router.post("/produtos", addProducts)
router.put("/produtos/:id", updateProducts)
router.delete("/produtos/:id", deleteProducts)

router.get("/caixas", getCaixas)
router.post("/caixas", addCaixas)
router.put("/caixas/:id", updateCaixas)
router.delete("/caixas/:id", deleteCaixas)

router.get("/vendas", getVendas)
router.post("/vendas", addVendas)
router.put("/vendas/:id", updateVendas)
router.delete("/vendas/:id", deleteVendas)

router.get("/vendaPgto", getVendasPgto)
router.post("/vendaPgto", addVendasPgto)
router.put("/vendaPgto/:id", updateVendasPgto)
router.delete("/vendaPgto/:id", deleteVendasPgto)

router.get("/formas", getFormas)

export default router
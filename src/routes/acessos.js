import express from "express";

import { getProducts, addProducts, updateProducts, deleteProducts } from "../controllers/produto";
import { getFestas, addFestas, updateFestas, deleteFestas } from "../controllers/festa";
import { getCaixas, addCaixas, updateCaixas, deleteCaixas } from "../controllers/caixa";
import { getVendas, addVendas, updateVendas, deleteVendas } from "../controllers/venda";
import { getVendasProdutos, addVendasProdutos, updateVendasProdutos, deleteVendasProdutos } from "../controllers/vendas_produtos";
import { getSangria, addSangria, updateSangria, deleteSangria } from "../controllers/sangria";

import { getUsers, addUser, updateUser, deleteUser } from "../controllers/usuario";

import { getEstoque, addEstoque, updateEstoque, deleteEstoque } from "../controllers/estoque";
import { getProdutosEstoque } from "../controllers/vw_produtos_estoque";

const router = express.Router()
// gerencia a rota em que será carregado os valores consultados do pool

router.get("/status", (req, res) => {res.send('Running API...')})

router.get("/produtos-estoque", getProdutosEstoque)

router.get("/estoque", getEstoque)
router.post("/estoque", addEstoque)
router.put("/estoque/:id_estoque", updateEstoque)
router.delete("/estoque/:id_estoque", deleteEstoque)

router.get("/usuarios", getUsers)
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

export default router
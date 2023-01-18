const express = require("express");
const router = express.Router();

const carroController = require("./controllers/carroController");

router.get("/carros", carroController.buscarTodos);
router.get("/carros/:codigo", carroController.buscarUm);
router.post("/carro", carroController.inserir);
router.put("/carro/:codigo", carroController.alterar);
router.delete("/carro/:codigo", carroController.deletar);

module.exports = router;

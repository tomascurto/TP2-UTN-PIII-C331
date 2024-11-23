const express = require("express");
const { crearCantante, traerCantantes, traerCantante, borrarCantante, actualizarCantante } = require("../controllers/cantantesControllers");

const router = express.Router();

router.get("/", traerCantantes);
router.get("/:id", traerCantante);
router.post("/", crearCantante);
router.put("/:id", actualizarCantante);
router.delete("/:id", borrarCantante);

module.exports = router;
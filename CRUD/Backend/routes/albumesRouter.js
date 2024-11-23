const express = require("express");
const { crearAlbum, traerAlbums, traerAlbum, borrarAlbum, actualizarAlbum } = require("../controllers/albumesControllers");

const router = express.Router();

router.get("/", traerAlbums);
router.get("/:id", traerAlbum);
router.post("/", crearAlbum);
router.put("/:id", actualizarAlbum);
router.delete("/:id", borrarAlbum);

module.exports = router;

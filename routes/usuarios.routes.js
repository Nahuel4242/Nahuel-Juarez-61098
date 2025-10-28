const express = require("express");
const { getAllUsuario, getOneUsuario, deleteUsuario, updateUsuario, createUsuario } = require("../controllers/usuario");
const router = express.Router();



router.get("/usuarios", getAllUsuario)
router.get("/usuario/obtener/:id", getOneUsuario)
router.delete("/usuario/borrar/:id",deleteUsuario)
router.put("/usuario/actualizar/:id", updateUsuario)
router.post("/usuario/crear/" ,createUsuario) 


module.exports= router;
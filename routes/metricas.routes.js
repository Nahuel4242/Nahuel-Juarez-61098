const express = require("express");
const { getAllStock } = require("../controllers/metricas.controller");

const router = express.Router();

router.get("/", getAllStock)




module.exports = router;
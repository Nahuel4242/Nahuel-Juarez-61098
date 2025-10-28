const express = require("express");
const { getAllVentas, updateVenta } = require("../controllers/ventas"); 
const router = express.Router();


router.get("/ventas",getAllVentas) 

router.put("/venta/actulizar", updateVenta)



module.exports = router;

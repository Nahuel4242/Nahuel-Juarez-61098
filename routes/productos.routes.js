const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getOneProduct,
  deleteProduct,
  updateProduct,
  createProduct,
  getBestSellingProduct
} = require("../controllers/producto");


router.get("/productos", getAllProducts);
router.get("/productos/:id", getOneProduct);
router.delete("/producto/eliminar/:id", deleteProduct);
router.put("/productos/editar/:id", updateProduct);
router.post("/productos/agregar", createProduct);

//(producto más vendido)
router.get("/productos/mejor-venta", getBestSellingProduct);

module.exports = router;

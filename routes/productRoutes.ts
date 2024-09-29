import express from "express";
import {
  getProducts,
  getProductById,
  registerProduct,
  updateProduct,
  deleteProduct
} from "../controller/productController";

const router = express.Router();

// Obtener todos los productos
router.route("/").get(getProducts);
router.route("/get/:id").get(getProductById);

// Registrar un nuevo producto
router.route("/register").post(registerProduct);

// Actualizar un producto existente (requiere ID)
router.route("/:id").put(updateProduct);

// Eliminar un producto (requiere ID)
router.route("/:id").delete(deleteProduct);

export default router;

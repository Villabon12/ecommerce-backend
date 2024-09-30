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


/**
 * @swagger
 * /api/products:
 *   get: 
 *      summary: Obtener Productos
 *      tags: [Productos]
 *      parameters:
 *      responses:
 *        200: Productos Obtenidos
 *        401: No autorizado
 *        404: No se encontraron productos
 *        500: Error interno del servidor
 *   post:
 *      summary: Registrar Producto
 *      tags: [Productos]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *      responses:
 *        200:
 *          description: Producto registrado
 *          content:
 *            application/json:
 *              schema:
 *   put:
 *      summary: Actualizar Producto
 *      tags: [Productos]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: ID del producto
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *      responses:
 *        200:
 *          description: Producto actualizado
 *          content:
 *            application/json:
 *              schema:
 *   delete:
 *      summary: Eliminar Producto
 *      tags: [Productos]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: ID del producto
 *      responses:
 *        200:
 *          description: Producto eliminado
 *          content:
 *            application/json:
 *              schema:
 * 
 * 
 */
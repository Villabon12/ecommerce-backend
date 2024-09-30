import express from "express";
import {
    deleteOrder,
    registerOrder,
    getOrders,
} from "../controller/orderController";

const router = express.Router();

// Obtener todos los ordenes
router.route("/").get(getOrders);

// Registrar un nuevo ordenes
router.route("/register").post(registerOrder);

// Eliminar un ordenes (requiere ID)
router.route("/:id").delete(deleteOrder);

export default router;

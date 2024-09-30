import asyncHandler from "express-async-handler";
import { Order } from "../models/";
import { Request, Response } from "../types/express";

/**
 * Fetch all order
 * @route GET /api/orders
 * @access Public
 */
const getOrders = asyncHandler(async (req: Request, res: Response) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;

  // Get search keyword from request and search for partial match
  const keyword = req.query.keyword
    ? {
      name: {
        $regex: req.query.keyword,
        $options: "i",
      } as any,
    }
    : {};

  const count = await Order.countDocuments({ ...keyword });
  const order = await Order.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ order, page, pages: Math.ceil(count / pageSize) });
});

const registerOrder = asyncHandler(async (req: Request, res: Response) => {
  const { name, price, description, image, brand, category, countInStock } =
    req.body;

  const order = new Order({
    name,
    price,
    description,
    image,
    brand,
    category,
    countInStock,
  });

  const createOrder = await order.save();

  res.status(201).json(createOrder);
});


const deleteOrder = asyncHandler(async (req: Request, res: Response) => {
  const order = await Order.findById(req.params._id);

  if (order) {
    await order.deleteOne({_id: req.params._id});
    res.json({ message: "Order removed" });
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});



export {
  deleteOrder,
  registerOrder,
  getOrders,
};
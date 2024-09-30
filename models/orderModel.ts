import { model, Schema } from "mongoose";
import { OrderDocument } from "../types/";

const orderSchema = new Schema(
  {
    orderItems: [
      {
        name: {
          type: String,
          required: true,
        },
        qty: {
          type: Number,
          required: true,
        },
        image: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        product: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

export const Order = model<OrderDocument>("Order", orderSchema);
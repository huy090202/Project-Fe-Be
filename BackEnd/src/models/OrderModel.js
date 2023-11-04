const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    orderItems: [
      {
        name: { type: String, required: true },
        amount: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          // join Product vao trong Order (populate trong mongoDB)
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
      },
    ],

    // Dia chi giao hang
    shippingAddress: {
      fullName: { type: String, required: true },
      address: { type: String, required: true },
      city: { type: String, required: true },
      phone: { type: Number, required: true },
    },

    paymentMethod: { type: String, required: true }, // phuong thuc thanh toan
    itemsPrice: { type: Number, required: true }, // tong gia cua cac san pham
    shippingPrice: { type: Number, required: true }, // phi giao hang
    taxPrice: { type: Number, required: true }, // thue
    totalPrice: { type: Number, required: true }, // tong tien tu tren xuong
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // thong tin user
    isPaid: { type: Boolean, default: false }, // trang thai thanh toan
    paidAt: { type: Date }, // thoi diem thanh toan
    isDelivered: { type: Boolean, default: false }, // trang thai giao hang
    deliveredAt: { type: Date }, // thoi diem giao hang
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;

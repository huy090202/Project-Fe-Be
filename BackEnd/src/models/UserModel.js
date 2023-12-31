const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String }, // require la bat buoc
    email: { type: String, require: true, unique: true }, // unique la duy nhat
    password: { type: String, require: true },
    isAdmin: { type: Boolean, require: true, default: false }, // xet quyen
    phone: { type: Number },
    address: { type: String },
    avatar: { type: String },
  },
  {
    timestamps: true, // co thoi gian tao va update
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;

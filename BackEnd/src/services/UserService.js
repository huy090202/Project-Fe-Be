const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const { genneralAccessToken, genneralRefreshToken } = require("./JwtService");

// Sign up
const createUser = (newUser) => {
  return new Promise(async (resolve, reject) => {
    const { name, email, password, confirmPassword, phone, address, avatar } =
      newUser;

    try {
      const checkUser = await User.findOne({
        email: email,
      });

      if (checkUser !== null) {
        resolve({
          status: "error",
          message: "The email is already!",
        });
      }

      const hash = bcrypt.hashSync(password, 10);

      const createdUser = await User.create({
        name,
        email,
        password: hash,
        phone,
        address,
        avatar,
      });

      if (createdUser) {
        resolve({
          status: "Ô sờ kê!",
          message: "Success!",
          data: createdUser,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

// Sign in
const loginUser = (userLogin) => {
  return new Promise(async (resolve, reject) => {
    const { email, password } = userLogin;

    try {
      const checkUser = await User.findOne({
        email: email,
      });

      if (checkUser === null) {
        resolve({
          status: "Ô sờ kê!",
          message: "The user is not defined!",
        });
      }

      // check password
      const comparePassword = bcrypt.compareSync(password, checkUser.password);

      if (!comparePassword) {
        resolve({
          status: "Ô sờ kê!",
          message: "The password or user is incorrect!",
        });
      }

      const access_token = await genneralAccessToken({
        id: checkUser.id,
        isAdmin: checkUser.isAdmin,
      });

      // Khi access_token het han thi se cap lai token moi dua vao refresh_token
      const refresh_token = await genneralRefreshToken({
        id: checkUser.id,
        isAdmin: checkUser.isAdmin,
      });

      resolve({
        status: "Ô sờ kê!",
        message: "Success!",
        access_token,
        refresh_token,
      });
    } catch (e) {
      reject(e);
    }
  });
};

// Update user
const updateUser = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkUser = await User.findOne({
        _id: id,
      });

      console.log("checkUser:", checkUser);

      if (checkUser === null) {
        resolve({
          status: "Ô sờ kê!",
          message: "The user is not defined!",
        });
      }

      const updatedUser = await User.findByIdAndUpdate(id, data, { new: true });

      console.log("updatedUser:", updatedUser);

      resolve({
        status: "Ô sờ kê!",
        message: "Update user success!",
        data: updatedUser,
      });
    } catch (e) {
      reject(e);
    }
  });
};

// Delete user
const deleteUser = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkUser = await User.findOne({
        _id: id,
      });

      if (checkUser === null) {
        resolve({
          status: "Ô sờ kê!",
          message: "The user is not defined!",
        });
      }

      await User.findByIdAndDelete(id);

      resolve({
        status: "Ô sờ kê!",
        message: "Delete user success!",
      });
    } catch (e) {
      reject(e);
    }
  });
};

// Get all user
const getAllUser = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const allUser = await User.find();

      resolve({
        status: "Ô sờ kê!",
        message: "Delete user success!",
        data: allUser,
      });
    } catch (e) {
      reject(e);
    }
  });
};

// Get detail user
const getDetailUser = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await User.findOne({
        _id: id,
      });

      if (user === null) {
        resolve({
          status: "Ô sờ kê!",
          message: "The user is not defined!",
        });
      }

      resolve({
        status: "Ô sờ kê!",
        message: "Get detail user success!",
        data: user,
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createUser,
  loginUser,
  updateUser,
  deleteUser,
  getAllUser,
  getDetailUser,
};

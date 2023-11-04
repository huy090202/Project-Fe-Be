const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const { genneralAccessToken } = require("./JwtService");

// Dang ky
const createUser = (newUser) => {
  return new Promise(async (resolve, reject) => {
    const { name, email, password, confirmPassword, phone } = newUser;

    try {
      const checkUser = await User.findOne({
        email: email,
      });

      if (checkUser !== null) {
        resolve({
          status: "Ô sờ kê!",
          message: "The email is already!",
        });
      }

      const hash = bcrypt.hashSync(password, 10);

      const createdUser = await User.create({
        name,
        email,
        password: hash,
        phone,
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

// Dang nhap
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
      const refresh_token = await genneralAccessToken({
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

module.exports = { createUser, loginUser };

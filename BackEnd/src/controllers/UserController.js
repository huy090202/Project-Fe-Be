const UserService = require("../services/UserService");
const JwtService = require("../services/JwtService");

// Sign up
const createUser = async (req, res) => {
  try {
    const { email, password, confirmPassword } = req.body;
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const isCheckEmail = reg.test(email);

    if (!email || !password || !confirmPassword) {
      return res.status(200).json({
        status: "error",
        message: "The input is required",
      });
    } else if (!isCheckEmail) {
      return res.status(200).json({
        status: "error",
        message: "The input is email",
      });
    } else if (password !== confirmPassword) {
      return res.status(200).json({
        status: "error",
        message: "The password is equal confirmPassword",
      });
    }

    const response = await UserService.createUser(req.body);

    return res.status(200).json(response);
  } catch (err) {
    return res.status(404).json({
      error: err,
    });
  }
};

// Sign in
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const isCheckEmail = reg.test(email);

    if (!email || !password) {
      return res.status(200).json({
        status: "error",
        message: "The input is required",
      });
    } else if (!isCheckEmail) {
      return res.status(200).json({
        status: "error",
        message: "The input is email",
      });
    }

    const response = await UserService.loginUser(req.body);

    const { refresh_token, ...newResponses } = response;

    res.cookie("refresh_token", refresh_token, {
      httpOnly: true, // Chi lay dc cookie thong qua http
      secure: false, // Them nhung bao mat phia client
      sameSite: "strict",
      path: "/",
    });

    return res.status(200).json(newResponses);
  } catch (err) {
    return res.status(404).json({
      error: err,
    });
  }
};

// Update user
const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const data = req.body;

    if (!userId) {
      return res.status(200).json({
        status: "error",
        message: "The userId is required",
      });
    }

    const response = await UserService.updateUser(userId, data);

    return res.status(200).json(response);
  } catch (err) {
    return res.status(404).json({
      error: err,
    });
  }
};

// Delete user
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    if (!userId) {
      return res.status(200).json({
        status: "error",
        message: "The userId is required",
      });
    }

    const response = await UserService.deleteUser(userId);

    return res.status(200).json(response);
  } catch (err) {
    return res.status(404).json({
      error: err,
    });
  }
};

// Get all user
const getAllUser = async (req, res) => {
  try {
    const response = await UserService.getAllUser();

    return res.status(200).json(response);
  } catch (err) {
    return res.status(404).json({
      error: err,
    });
  }
};

// Get detail user
const getDetailUser = async (req, res) => {
  try {
    const userId = req.params.id;

    if (!userId) {
      return res.status(200).json({
        status: "error",
        message: "The userId is required",
      });
    }

    const response = await UserService.getDetailUser(userId);

    return res.status(200).json(response);
  } catch (err) {
    return res.status(404).json({
      error: err,
    });
  }
};

// Refresh token when access token het han
const refreshToken = async (req, res) => {
  try {
    const token = req.cookies.refresh_token;
    // let token = req.headers.token.split(" ")[1];

    if (!token) {
      return res.status(200).json({
        status: "error",
        message: "The token is required",
      });
    }

    const response = await JwtService.refreshTokenJwtService(token);

    return res.status(200).json(response);
  } catch (err) {
    return res.status(404).json({
      message: err,
    });
  }
};

// Log out
const logoutUser = async (req, res) => {
  try {
    res.clearCookie("refresh_token");

    return res.status(200).json({
      status: "Ô SỜ KÊ",
      message: "Logout successfully",
    });
  } catch (err) {
    return res.status(404).json({
      message: err,
    });
  }
};

module.exports = {
  createUser,
  loginUser,
  updateUser,
  deleteUser,
  getAllUser,
  getDetailUser,
  refreshToken,
  logoutUser,
};

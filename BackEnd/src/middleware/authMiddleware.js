const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

// Ham check quyen admin
const authMiddelWare = (req, res, next) => {
  const token = req.headers.token.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN, function (err, user) {
    if (err) {
      return res.status(404).json({
        message: "The authemtication",
        status: "ERROR",
      });
    }

    const { payload } = user;

    // Neu co chuyen token cua admin (patload.isAdmin) || k chuyen thi them ?
    if (payload?.isAdmin) {
      next(); // Neu la admin thi di tiep
    } else {
      return res.status(404).json({
        message: "The authemtication",
        status: "ERROR",
      });
    }
  });
};

// Ham cho phep user k phai admin xem thong tin cua minh
const authUserMiddelWare = (req, res, next) => {
  const token = req.headers.token.split(" ")[1];
  const userId = req.params.id;
  jwt.verify(token, process.env.ACCESS_TOKEN, function (err, user) {
    if (err) {
      return res.status(404).json({
        message: "The authemtication",
        status: "ERROR",
      });
    }

    const { payload } = user;

    // Neu co chuyen token cua admin (patload.isAdmin) || k chuyen thi them ?
    if (payload?.isAdmin || payload?.id === userId) {
      next(); // Neu la admin thi di tiep
    } else {
      return res.status(404).json({
        message: "The authemtication",
        status: "ERROR",
      });
    }
  });
};

module.exports = { authMiddelWare, authUserMiddelWare };

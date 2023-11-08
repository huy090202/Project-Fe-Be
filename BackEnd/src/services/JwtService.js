const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const genneralAccessToken = async (payload) => {
  const access_token = jwt.sign(
    {
      payload,
    },
    process.env.ACCESS_TOKEN,
    { expiresIn: "1h" } // thoi gian token het han 1h
  );

  return access_token;
};

const genneralRefreshToken = async (payload) => {
  const refresh_token = jwt.sign(
    {
      payload,
    },
    process.env.REFRESH_TOKEN,
    { expiresIn: "365d" } // thoi gian refresh token 365 ngay
  );

  return refresh_token;
};

module.exports = { genneralAccessToken, genneralRefreshToken };

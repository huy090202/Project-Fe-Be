const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

// Chinh sach bao mat cua trinh duyet web, de tranh truy cap vao cac domain khac nhau
const cors = require("cors");

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

// const corsOptions = {
//   origin: "http://localhost:3000", // Chỉ chấp nhận yêu cầu từ domain này
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   credentials: true, // Cho phép sử dụng cookie và các phương tiện xác thực khác
// };

// app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(cookieParser());

routes(app);

mongoose
  .connect(`${process.env.MONGO_DB}`)
  .then(() => {
    console.log("Connect to MongoDB successfully!");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB: " + err);
  });

app.listen(port, () => {
  console.log("Server is running on port: " + port);
});

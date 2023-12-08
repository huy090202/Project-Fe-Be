const UserRouter = require("./UserRouter");
const ProductRouter = require("./ProductRouter");
const { createProxyMiddleware } = require("http-proxy-middleware");

const routes = (app) => {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:3000",
      changeOrigin: true,
    })
  );

  app.use("/api/user", UserRouter);

  app.use("/api/product", ProductRouter);
};

module.exports = routes;

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "https://pre-onboarding-selection-task.shop/",
      changeOrigin: true,
    })
  );
  app.listen(3000);
};

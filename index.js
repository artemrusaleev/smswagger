const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 5050;
const swaggerUi = require("swagger-ui-express");
const main = require("./main.json");
const basket = require("./basket.json");

const options = {
  customCssUrl: "/static/swagger-ui.css",
};
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(
  "/basket",
  swaggerUi.serveFiles(basket, options),
  swaggerUi.setup(basket, options)
);
app.use(
  "/",
  swaggerUi.serveFiles(main, options),
  swaggerUi.setup(main, options)
);

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));

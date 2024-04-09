const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 5050;
const swaggerUi = require("swagger-ui-express");
const main = require("./main.json");
const basket = require("./basket.json");

app.get("*", (req, res, next) => {
  next();
});
app.use("/basket", swaggerUi.serveFiles(basket), swaggerUi.setup(basket));
app.use("/", swaggerUi.serveFiles(main), swaggerUi.setup(main));

app.listen(PORT, () => console.log(`Server is running in posrt ${PORT}`));

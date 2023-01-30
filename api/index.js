const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");

const options = {
  customCss: ".swagger-ui .topbar { display: none }",
};
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");

const options = {
  customCss: ".swagger-ui .topbar { display: none }",
};
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
app.listen(process.env.PORT || 3000, () => {
  console.log(`Swagger app listening on port ${process.env.PORT || 3000}`);
});

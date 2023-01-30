const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../../swagger.json");

const options = {
  customCss: ".swagger-ui .topbar { display: none }",
};

module.exports = swaggerUi.setup(swaggerDocument, options);

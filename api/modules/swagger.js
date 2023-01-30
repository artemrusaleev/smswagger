const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../../swagger.json");
const fs = require("fs");
const styles = fs.readFile(
  "./node_modules/swagger-ui-dist/index.css",
  "utf8",
  (err, data) => {
    return data;
  }
);

const options = {
  customCss: styles,
};

module.exports = swaggerUi.setup(swaggerDocument, options);

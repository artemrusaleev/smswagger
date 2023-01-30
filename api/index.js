const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swagger = require("./modules/swagger");

app.use("/api", swaggerUi.serve, swagger);
app.listen(process.env.PORT || 3000, () => {
  console.log(`Swagger app listening on port ${process.env.PORT || 3000}`);
});

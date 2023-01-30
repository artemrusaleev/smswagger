const express = require("express");
const router = express.Router();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");

router.use("/", swaggerUi.serve);
router.use(express.static(__dirname + "/static/"));
router.get("/", swaggerUi.setup(swaggerDocument));

module.exports = router;

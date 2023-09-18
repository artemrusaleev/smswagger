const express = require("express");
const basket = require("./api/basket");
const main = require("./api/main");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 5050;

app.get("*", (req, res, next) => {
  next();
});
app.use("/api/basket", basket);
app.use("/api/basket/", express.static(path.join(__dirname, "static")));
app.use("/api/main", main);
app.use("/api/main/", express.static(path.join(__dirname, "static")));

app.listen(PORT, () => console.log(`Server is running in posrt ${PORT}`));

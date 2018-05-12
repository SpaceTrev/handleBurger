const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8080;
const app = express();
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgers_controller.js");

app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use("/", routes);
app.listen(port);
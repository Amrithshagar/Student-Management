const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const swaggerJSdoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const StudentRoute = require("./routes/StudentRouter");
mongoose.connect("mongodb://127.0.0.1:27017/testdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
const app = express();
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "nodeJS API project for mongodb",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3001/",
      },
    ],
  },
  apis: ["F:\\KochaSoft\\First Task\\routes\\StudentRouter.js"],
};

const swaggerSpec = swaggerJSdoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

db.on("error", (err) => {
  console.log(err);
});

db.once("open", () => {
  console.log("database connection established!");
});

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

app.use("/api/StudentRouter", StudentRoute);

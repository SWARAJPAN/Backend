require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connect");
const bodyParser = require("body-parser");

const port = process.env.PORT || 3000;
const app = express();

//import recipe router
const recipeRouter = require("./routes/recipeRoutes");
//import user router
const userRouter = require("./routes/userRoutes");

app.use(express.json());
app.use(bodyParser.json());
app.use("/api/v1", recipeRouter);
app.use("/api/v1", userRouter);

app.listen(port, async () => {
  await connectDB().then((c) => {});
  
});

app.use(express.json());

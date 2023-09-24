const express = require("express");

const app = express();

const userRoutes = require("./routes/users");
const rndmStr = Math.ceil(Math.random() * 1000000);

const middlewares = require("./middleware/logs");

app.use(middlewares.logRequest);
app.use(express.json());

app.use("/", userRoutes);

const port = 4000;

app.listen(`${port}`, () => {
  console.log(`server running on port ${port}`);
});

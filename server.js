const express = require("express");
const cors = require("cors");
const productsRoutes = require("./routes/productsRoutes");

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use("/products", productsRoutes);

const server = app.listen(process.env.PORT, () => {
  console.log(`Server started on Port ${process.env.PORT}`);
});

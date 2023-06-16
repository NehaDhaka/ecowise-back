require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const productRoutes = require("./routes/productsRoutes");

app.use("/api/products", productRoutes);

app.listen(process.env.PORT || 8080, () => {
  console.log("Server Started on http://localhost: " + process.env.PORT);
  console.log("Press CTRL + C to stop server");
});

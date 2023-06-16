const knex = require("knex")(require("../knexfile"));

const index = (_req, res) => {
  knex("products")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving products: ${err}`));
  console.log("Displaying all products");
};

const findOne = (req, res) => {
  knex("products")
    .where({ id: req.params.id })
    .then((productFound) => {
      if (productFound.length === 0) {
        return res
          .status(404)
          .json({ message: `Product with ID: ${req.params.id} not found` });
      }

      const productData = productFound[0];

      res.status(200).json(productData);
    })
    .catch(() => {
      res.status(500).json({
        message: `Unable to retrieve product data for product with ID: ${req.params.id}`,
      });
    });
};

module.exports = {
  index,
  findOne,
};

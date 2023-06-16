/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("products").del();
  await knex("products").insert([
    {
      name: "Organic Black Tee",
      img: `http://localhost:5050/images/product-1.png`,
      price_range: "$12.99 - 14.99",
      description:
        "100% Cotton. Made with sustainably sourced USA grown cotton. Classic Fit",
      eco_rating: 95,
      type: "Black t-shirt",
      category: "Apparel",
    },
    {
      name: "Fruit of the Loom",
      img: `http://localhost:5050/images/product-2.png`,
      price_range: "$14.99 - 16.99",
      description:
        "100% Cotton. Made with sustainably sourced USA grown cotton. Classic Fit",
      eco_rating: 95,
      type: "Black t-shirt",
      category: "Apparel",
    },
    {
      name: "Fruit of the Loom",
      img: `http://localhost:5050/images/product-3.png`,
      price_range: "$14.99 - 16.99",
      description:
        "100% Cotton. Made with sustainably sourced USA grown cotton. Classic Fit",
      eco_rating: 95,
      type: "Black t-shirt",
      category: "Apparel",
    },
    {
      name: "Fruit of the Loom",
      img: `http://localhost:5050/images/product-4.png`,
      price_range: "$14.99 - 16.99",
      description:
        "100% Cotton. Made with sustainably sourced USA grown cotton. Classic Fit",
      eco_rating: 95,
      type: "Black t-shirt",
      category: "Apparel",
    },
    {
      name: "Fruit of the Loom",
      img: `http://localhost:5050/images/product-5.png`,
      price_range: "$14.99 - 16.99",
      description:
        "100% Cotton. Made with sustainably sourced USA grown cotton. Classic Fit",
      eco_rating: 95,
      type: "Black t-shirt",
      category: "Apparel",
    },
    {
      name: "Fruit of the Loom",
      img: `http://localhost:5050/images/product-6.png`,
      price_range: "$14.99 - 16.99",
      description:
        "100% Cotton. Made with sustainably sourced USA grown cotton. Classic Fit",
      eco_rating: 95,
      type: "Black t-shirt",
      category: "Apparel",
    },
    {
      name: "Fruit of the Loom",
      img: `http://localhost:5050/images/product-7.png`,
      price_range: "$14.99 - 16.99",
      description:
        "100% Cotton. Made with sustainably sourced USA grown cotton. Classic Fit",
      eco_rating: 95,
      type: "Black t-shirt",
      category: "Apparel",
    },
    {
      name: "Fruit of the Loom",
      img: `http://localhost:5050/images/product-8.png`,
      price_range: "$14.99 - 16.99",
      description:
        "100% Cotton. Made with sustainably sourced USA grown cotton. Classic Fit",
      eco_rating: 95,
      type: "Black t-shirt",
      category: "Apparel",
    },
  ]);
};

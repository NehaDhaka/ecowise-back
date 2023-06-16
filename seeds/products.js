/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("products").del();
  await knex("products").insert([
    {
      name: "Hanes t-shirt",
      img: "test-img",
      price_range: "$12.99 - 14.99",
      description:
        "100% Cotton. Made with sustainably sourced USA grown cotton. Classic Fit",
      eco_rating: 95,
      type: "Black t-shirt",
      category: "Apparel",
    },
    {
      name: "Fruit of the Loom",
      img: "test-img",
      price_range: "$14.99 - 16.99",
      description:
        "100% Cotton. Made with sustainably sourced USA grown cotton. Classic Fit",
      eco_rating: 95,
      type: "Black t-shirt",
      category: "Apparel",
    },
  ]);
};

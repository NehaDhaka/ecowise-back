/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("products").del();
  await knex("products").insert([
    {
      name: "Organic Tee",
      img: `http://localhost:5050/images/product-1.png`,
      price_range: "$14.99 - $19.99",
      description:
        "100% organic cotton. Sustainable and chemical-free farming practices. Hypoallergenic fabric.",
      eco_rating: 90,
      type: "Black t-shirt",
      category: "Apparel",
    },
    {
      name: "EcoBlend Tee",
      img: `http://localhost:5050/images/product-2.png`,
      price_range: " $9.99 - $12.99",
      description:
        "Recycled polyester and organic cotton. Offers a relaxed fit and is incredibly soft and lightweight. Polyester is derived from post-consumer plastic bottles, contributing to waste reduction.",
      eco_rating: 85,
      type: "Black t-shirt",
      category: "Apparel",
    },
    {
      name: "Sustainable V-Neck Tee",
      img: `http://localhost:5050/images/product-3.png`,
      price_range: " $16.99 - $19.99",
      description:
        "Made from a blend of Tencel and organic cotton. Sustainable fabric made from wood pulp, known for its breathability and moisture-wicking properties. Has a slim fit and is ideal for layering.",
      eco_rating: 92,
      type: "Black t-shirt",
      category: "Apparel",
    },
    {
      name: "Recycled Performance Tee",
      img: `http://localhost:5050/images/product-4.png`,
      price_range: "$19.99 - $24.99",
      description:
        "Crafted from a blend of recycled polyester and spandex. Designed for active individuals, offering moisture-wicking and quick-drying capabilities. Fabric is made from recycled plastic.",
      eco_rating: 88,
      type: "Black t-shirt",
      category: "Apparel",
    },
    {
      name: "Linen Blend Pocket Tee",
      img: `http://localhost:5050/images/product-5.png`,
      price_range: "$17.99 - $21.99",
      description:
        "Made from a blend of linen and organic cotton. Linen is a natural fiber known for its breathability and durability. Features a pocket detail and has a relaxed fit, making it perfect for casual wear.",
      eco_rating: 87,
      type: "Black t-shirt",
      category: "Apparel",
    },
    {
      name: "Bamboo Crew Neck Tee",
      img: `http://localhost:5050/images/product-6.png`,
      price_range: " $14.99 - $18.99",
      description:
        "Made from bamboo viscose. A sustainable and biodegradable material. Has a regular fit and is suitable for various occasions.",
      eco_rating: 93,
      type: "Black t-shirt",
      category: "Apparel",
    },
    {
      name: "Fair Trade Graphic Tee",
      img: `http://localhost:5050/images/product-7.png`,
      price_range: "$14.99 - 16.99",
      description:
        "Made from fair trade organic cotton. Fabric is soft and durable. Perfect for everyday wear.",
      eco_rating: 91,
      type: "Black t-shirt",
      category: "Apparel",
    },
    {
      name: "Essential Crew Neck Tee",
      img: `http://localhost:5050/images/product-8.png`,
      price_range: "$9.99 - $12.99",
      description:
        "Made from 100% organic cotton. Provides versatility and comfort. Fabric is soft and durable, making it perfect for everyday wear.",
      eco_rating: 95,
      type: "Black t-shirt",
      category: "Apparel",
    },
  ]);
};

const router = require("express").Router();
const productController = require("../controllers/productController");

router.route("/").get(productController.index);
router.route("/:id").get(productController.findOne);

module.exports = router;

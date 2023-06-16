const { index, findOne } = require("../controllers/productController");
const router = require("express").Router();

router.post("/", index);
router.post("/:id", findOne);

module.exports = router;

var express = require('express');
var router = express.Router();
const itemController = require("../controllers/ItemController")

router.get("/:id", itemController.show);
router.post("/", itemController.store);
router.put("/:id", itemController.update);
router.delete("/:id", itemController.destroy);

module.exports = router
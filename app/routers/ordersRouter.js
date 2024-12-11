const { Router } = require("express");
const { createOrder, getAllOrders } = require("../controllers");
const router = Router();

router.post("/", createOrder);
router.get("/", getAllOrders);

module.exports = router;

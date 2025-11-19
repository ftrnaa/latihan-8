const express = require("express");
const router = express.Router();

// Controller
const controller = require("../controllers/products.controller");

// IMPORT middleware
const { authBearer } = require("../middlewares/auth.middleware");

// ROUTES
router.get("/", controller.getProducts);
router.get("/:id", controller.getProductById);

// PROTEKSI ENDPOINT
router.post("/", authBearer, controller.createProduct);
router.put("/:id", authBearer, controller.updateProduct);
router.delete("/:id", authBearer, controller.deleteProduct);

module.exports = router;

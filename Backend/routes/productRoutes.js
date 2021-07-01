import express from "express";
const router = express.Router();
import {
  createProduct,
  createProductReview,
  deleteProduct,
  getProductById,
  getProducts,
  getTopProducts,
  updateProduct,
} from "../controllers/product Controller.js";
import { admin, protect } from "../middleware/authMiddleware.js";

//Get all products
router.route("/").get(getProducts).post(protect, admin, createProduct);

//Create a new review
router.route("/:id/reviews").post(protect, createProductReview);

//Get Top Rated Product
router.get("/top", getTopProducts);

//Get single product by id
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

export default router;

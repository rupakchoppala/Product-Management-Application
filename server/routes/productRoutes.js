import express from "express";
import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import { upload } from "../middlewares/multer.js";
const router = express.Router();

router.get("/", getAllProducts);
router.post("/", upload.single("image"), createProduct);
router.put("/update/:id", upload.single("image"), updateProduct);
router.delete("/:id", deleteProduct);
export default router;

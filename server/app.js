import express from 'express';
import cors from 'cors';
import path from "path";
import { fileURLToPath } from "url";

// To get __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app=express();
app.use(cors({
    origin: "https://product-management-application-4.onrender.com"
  }));
app.use(express.json());
app.use(express.json({ limit: "50mb" })); // increase limit
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
import productRoute from './routes/productRoutes.js'
app.use('/api/products',productRoute);
export default app;
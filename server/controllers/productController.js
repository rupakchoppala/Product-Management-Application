import Product from "../model/Product.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ price: 1 });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, price, originalPrice, description, category } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;
    if (Number(originalPrice) <= Number(price)) {
      return res
        .status(400)
        .json({ error: "Original price must be greater than the selling price." });
    }
    const product = await Product.create({
      name,
      price,
      originalPrice,
      description,
      category,
      image: imageUrl,
    });
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const updateProduct = async (req, res) => {
  try {
    const { name, price, description, category,originalPrice } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : req.body.image;

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { name, price, description,originalPrice, category, image: imageUrl },
      { new: true }
    );
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json({ message: "Product deleted successfully", id: req.params.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

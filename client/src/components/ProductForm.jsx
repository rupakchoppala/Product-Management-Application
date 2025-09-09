import React, { useState, useEffect, useRef } from "react";
import "../styles/ProductForm.css";
import { toast } from "react-toastify";
export default function ProductForm({ productToEdit, onProductAddedOrUpdated, onClose }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    originalPrice: "",
    description: "",
    category: "",
    image: null,
  });

  const fileInputRef = useRef(null);

  useEffect(() => {
    if (productToEdit) {
      setForm({
        name: productToEdit.name || "",
        price: productToEdit.price || "",
        originalPrice: productToEdit.originalPrice || "",
        description: productToEdit.description || "",
        category: productToEdit.category || "",
        image: null,
      });
      if (fileInputRef.current) fileInputRef.current.value = "";
    } else {
      setForm({ name: "", price: "", originalPrice: "", description: "", category: "", image: null });
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  }, [productToEdit]);

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setForm({ ...form, image: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Number(form.originalPrice) <= Number(form.price)) {
      toast.error("Original price must be greater than selling price.");
      return;
    }

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("price", form.price);
    formData.append("originalPrice", form.originalPrice);
    formData.append("description", form.description);
    formData.append("category", form.category);
    if (form.image) formData.append("image", form.image);

    try {
      const url = productToEdit
        ? `http://localhost:3000/api/products/update/${productToEdit._id}`
        : "http://localhost:3000/api/products/createProduct";
      const method = productToEdit ? "PUT" : "POST";

      const res = await fetch(url, { method, body: formData });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Operation failed");

      toast.success(productToEdit ? "Product updated!" : "Product added!");
      onProductAddedOrUpdated(data);
      onClose?.();

      setForm({ name: "", price: "", originalPrice: "", description: "", category: "", image: null });
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Failed");
    }
  };

  return (
    <form className="form modal-form" onSubmit={handleSubmit}>
      <h3>{productToEdit ? "Edit Product" : "Add Product"}</h3>
      <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input type="number" name="price" value={form.price} onChange={handleChange} placeholder="Selling Price" required />
      <input
        type="number"
        name="originalPrice"
        value={form.originalPrice}
        onChange={handleChange}
        placeholder="Original Price"
        required
      />
      <input type="text" name="description" value={form.description} onChange={handleChange} placeholder="Description" />
      <select name="category" value={form.category} onChange={handleChange} required>
        <option value="" disabled>
          Select Category
        </option>
        <option value="Herbicide">Herbicide</option>
        <option value="Pesticide">Pesticide</option>
        <option value="Fungicide">Fungicide</option>
        <option value="Fertilizers">Fertilizers</option>
      </select>
      <input type="file" name="image" accept="image/*" ref={fileInputRef} onChange={handleChange} />
      <div className="form-actions">
        <button type="button" className="btn-cancel" onClick={() => onClose?.()}>
          Cancel
        </button>
        <button type="submit" className="btn-submit">
          {productToEdit ? "Update Product" : "Add Product"}
        </button>
      </div>
    </form>
  );
}

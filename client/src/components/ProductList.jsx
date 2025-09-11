import React, { useState, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import ProductCard from "./ProductCard";
import ProductForm from "./ProductForm";
import ConfirmModal from "./confirmModal";
import "../styles/productList.css";
import axiosInstance from "../utils/axiosInsatnce.js";
import {toast} from "react-toastify";
export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [productToEdit, setProductToEdit] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [productToDelete, setProductToDelete] = useState(null);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    let isMounted = true;
    async function fetchProducts() {
      try {
        const res = await fetch("https://product-management-application-3.onrender.com/api/products");
        const data = await res.json();
        if (isMounted) setProducts(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error(err);
      }
    }
    fetchProducts();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleProductAddedOrUpdated = (product) => {
    setProducts((prev) =>
      productToEdit
        ? prev.map((p) => (p._id === product._id ? product : p))
        : [product, ...prev]
    );
    setProductToEdit(null);
    setFormVisible(false);
  };

  const handleDeleteClick = (product) => {
    setProductToDelete(product);
  };

  const confirmDelete = async () => {
    try {
      await axiosInstance.delete(`/api/products/${productToDelete._id}`);
      setProducts((prev) => prev.filter((p) => p._id !== productToDelete._id));
      toast.success(`Product ${productToDelete.name}  deleted successfully`)
      setProductToDelete(null);
    } catch (err) {
      console.error("Failed to delete product:", err);
      toast.error("Delete failed");
    }
  };

  const cancelDelete = () => setProductToDelete(null);

  const filteredProducts = products
    .filter(
      (p) =>
        (p.name || "").toLowerCase().includes(searchTerm.toLowerCase()) &&
        (categoryFilter === "" || p.category === categoryFilter)
    )
    .sort((a, b) =>
      sortOrder === "asc"
        ? Number(a.price) - Number(b.price)
        : Number(b.price) - Number(a.price)
    );

  const openAddForm = () => {
    setProductToEdit(null);
    setFormVisible(true);
  };

  const openEditForm = (product) => {
    setProductToEdit(product);
    setFormVisible(true);
  };

  const closeForm = () => {
    setProductToEdit(null);
    setFormVisible(false);
  };

  return (
    <div className="product-list-container container">
      <div className="list-header">
        <div className="left">
          <h2>Products</h2>
          <p className="muted">
            Manage products quickly — add, edit, delete and search.
          </p>
        </div>

        <div className="controls">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
         <div className="sort-wrapper">
  <label className="sort-label">Sort by Price</label>
  <select
    value={sortOrder}
    onChange={(e) => setSortOrder(e.target.value)}
    className="sort-select"
  >
    <option value="asc">Low - High</option>
    <option value="desc">High - Low</option>
  </select>
</div>

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="select"
          >
            <option value="">All Categories</option>
            <option value="Herbicide">Herbicide</option>
            <option value="Pesticide">Pesticide</option>
            <option value="Fungicide">Fungicide</option>
            <option value="Fertilizers">Fertilizers</option>
          </select>

          {/* Add Product button at the top */}
          <button className="add-product-btn" onClick={openAddForm}>
            <FiPlus size={18} style={{ marginRight: "6px" }} />
            Add Product
          </button>
        </div>
      </div>

      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              onEditClick={openEditForm}
              onProductDeleted={() => handleDeleteClick(product)}
            />
          ))
        ) : (
          <p className="no-products">No products found.</p>
        )}
      </div>

      {/* Modal for form */}
      {formVisible && (
        <div className="modal-backdrop">
          <div className="modal center">
            <ProductForm
              productToEdit={productToEdit}
              onProductAddedOrUpdated={handleProductAddedOrUpdated}
              onClose={closeForm}
            />
          </div>
        </div>
      )}

      {productToDelete && (
        <ConfirmModal
          message={`Are you sure you want to delete "${productToDelete.name}"?`}
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </div>
  );
}

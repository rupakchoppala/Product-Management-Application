import React from "react";
import { FaEdit, FaTrashAlt, FaBoxOpen, FaTag } from "react-icons/fa";
import "/home/akshay/Documents/Product-Management-Application/client/src/styles/productCard.css";

export default function ProductCard({ product, onProductDeleted, onEditClick }) {
  const imageUrl = product?.image ? `http://localhost:3000${product.image}` : null;

  let discount = null;
  if (product.originalPrice && product.originalPrice > product.price) {
    discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  }

  return (
    <div className="product-card">
      <div className="media">
        {imageUrl ? (
          <img src={imageUrl} alt={product.name} className="product-image" />
        ) : (
          <div className="no-image">
            <FaBoxOpen size={40} color="#888" />
            <p>No Image</p>
          </div>
        )}
        {discount && (
          <div className="discount-badge">
            <FaTag className="discount-icon" />
            <span>-{discount}% OFF</span>
          </div>
        )}
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <div className="meta">
          <span className="product-category">{product.category || "Uncategorized"}</span>
          <div className="price-section">
            <span className="product-price">₹{product.price}</span>
            {product.originalPrice && product.originalPrice > product.price && (
              <>
                <span className="product-original">₹{product.originalPrice}</span>
              </>
            )}
          </div>
        </div>
        {product.description && <p className="product-description">{product.description}</p>}
      </div>

      <div className="product-actions">
        <button className="edit-btn" onClick={() => onEditClick(product)}>
          <FaEdit /> Edit
        </button>
        <button className="delete-btn" onClick={() => onProductDeleted(product._id)}>
          <FaTrashAlt /> Delete
        </button>
      </div>
    </div>
  );
}

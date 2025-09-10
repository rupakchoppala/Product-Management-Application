import React from "react";
import { FaEdit, FaTrashAlt, FaBoxOpen } from "react-icons/fa";
import "../styles/productCard.css";

export default function ProductCard({ product, onProductDeleted, onEditClick }) {
  const imageUrl = product?.image
    ? `http://localhost:3000${product.image}`
    : null;

  const discount =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) * 100
        )
      : null;

  return (
    <div className="product-card">
      {/* Product Image */}
      <div className="media">
        {imageUrl ? (
          <img src={imageUrl} alt={product.name} className="product-image" />
        ) : (
          <div className="no-image">
            <FaBoxOpen size={40} color="#888" />
            <p>No Image</p>
          </div>
        )}

        {/* Discount Badge */}
        {discount && (
          <div className="discount-badge">-{discount}% OFF</div>
        )}
      </div>

      {/* Info Section */}
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>

        <span className="product-category">
          {product.category || "Uncategorized"}
        </span>

        <div className="price-section">
          <span className="product-price">₹{product.price}</span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="product-original">₹{product.originalPrice}</span>
          )}
        </div>

        {product.description && (
          <p className="product-description">
            <strong>Info:</strong> {product.description}
          </p>
        )}
      </div>

      {/* Actions */}
      <div className="product-actions">
        <button
          className="edit-btn"
          onClick={() => onEditClick(product)}
        >
          <FaEdit /> Edit
        </button>
        <button
          className="delete-btn"
          onClick={() => onProductDeleted(product._id)}
        >
          <FaTrashAlt /> Delete
        </button>
      </div>
    </div>
  );
}

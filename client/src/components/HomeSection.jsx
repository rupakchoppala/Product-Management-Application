import React from "react";
import { useNavigate } from "react-router-dom";
import "/home/akshay/Documents/Product-Management-Application/client/src/styles/homeSection.css";

export default function HomeSection() {
  const navigate = useNavigate();

  return (
    <section className="home-section">
      <div className="home-content">
        <h1>Quality Agricultural Products</h1>
        <p>
          Explore our range of <strong>Herbicides</strong>, <strong>Pesticides</strong>, <strong>Fungicides</strong>, and <strong>Fertilizers</strong> designed to boost crop health and maximize yield.
        </p>
        <button className="explore-btn" onClick={() => navigate("/products")}>
          Explore Products
        </button>
      </div>
    </section>
  );
}

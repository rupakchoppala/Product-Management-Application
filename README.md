# 📦 Product Management Application

A full-stack **Product Management Application** built with **React (frontend)** and **Node.js + Express (backend)**.  
It allows users to **manage products efficiently** with features like adding, editing, deleting, and viewing products.  
Designed with a clean UI and responsive components for smooth user experience.  

---

## 🚀 Features

- ✅ Add new products with details (name, description, price, category, image, etc.)
- ✏️ Edit existing products
- 🗑️ Delete products with confirmation
- 📋 View all products in a stylish card/list format
- 🔍 Search and filter products
- 🎨 Responsive UI with modern design
- ⚡ RESTful APIs for backend operations
- 🛠️ CRUD operations integrated with database

---

## 🏗️ Tech Stack

### Frontend
- **React.js** (Functional Components, Hooks)
- **React Icons** for UI icons
- **CSS / Tailwind CSS** for styling
- **Axios** for API requests

### Backend
- **Node.js**
- **Express.js**
- **MongoDB / JSON Server** (depending on setup)
- **Mongoose** (if MongoDB is used)
- **CORS & Middleware** for smooth API integration

---

## 📂 Project Structure
product-management-application/
│── client/ # React frontend
│ ├── src/
│ │ ├── components/ # ProductCard, ProductForm, Modals, etc.
│ │ ├── utils/ # Axios instance, helpers
│ │ └── App.js
│ └── package.json
│
│── server/ # Node.js backend
│ ├── models/ # Product schema (if MongoDB used)
│ ├── routes/ # API endpoints
│ ├── server.js # Main server file
│ └── package.json
│
└── README.md

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/product-management-application.git
cd product-management-application
cd server
npm installBackend runs on http://localhost:3000

3️⃣ Setup Frontend
cd client
npm install
npm start
npm start
API Endpoints (Sample)
Method	 Endpoint	  Description
GET	 /api/products	Get all products
POST	 /api/products	Add a new product
PUT	 /api/products/:id	Update a product
DELETE	/api/products/:id	Delete a product
Outcomes

Built a scalable CRUD application using MERN stack fundamentals.

Demonstrated frontend-backend integration with REST APIs.

Applied state management and React hooks for smooth UX.

Designed a modular project structure for maintainability.
Author

Rupak Choppala – Full Stack Developer

 Email: rupakchoppala@gmail.com





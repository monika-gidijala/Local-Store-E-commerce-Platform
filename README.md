# 🛒 LocalMart — Local Store E-Commerce Platform

> **Task-03** | A fully-featured e-commerce website for a local store, enabling customers to browse and purchase products online.

---

## 📸 Overview

**LocalMart** is a premium, dark-themed e-commerce web application built with pure **HTML, CSS, and JavaScript** — no frameworks, no build tools. It simulates a real local store online with 27 products across 7 categories, a working shopping cart, order tracking, customer reviews, live chat support, and much more.

---

## 🚀 Getting Started

### Option 1 — Open Directly (No Server Needed)
Simply double-click `index.html` to open in your browser.

### Option 2 — Run with Local Server (Recommended)
```bash
# Using Python (recommended)
python -m http.server 3000

# Using Node.js (if installed)
npx serve .
```
Then open → **http://localhost:3000**

---

## 📁 Project Structure

```
local-store-ecommerce/
│
├── index.html      # Main HTML — structure, pages, modals, widgets
├── style.css       # Complete CSS — dark theme, animations, responsive
├── app.js          # Full JS — data, cart, filters, orders, chat logic
└── README.md       # This file
```

---

## ✨ Features

### 🛍️ Core Features
| Feature | Description |
|---|---|
| **Product Listings** | 27 products with emoji visuals, descriptions, prices, ratings, and badges |
| **Shopping Cart** | Add, remove, update quantity — persisted via `localStorage` |
| **Checkout Flow** | Name, address, phone, payment method selection |
| **Wishlist** | Heart button on every product card |
| **Search** | Real-time search across all products by name, description, or category |

### ⚙️ Optional Features (All Implemented)
| Feature | Description |
|---|---|
| **Order Tracking** | Enter Order ID → see step-by-step progress (Confirmed → Processing → Shipped → Delivered) |
| **User Reviews** | Star picker + text review on each product modal |
| **Sort & Filters** | Filter by category, price range, rating, in-stock; sort by price/rating/name |
| **Customer Support** | Contact form, FAQ accordion, live chat widget, email & phone links |

### 🎨 Design Highlights
- Dark glassmorphism premium UI
- Purple gradient accent color palette
- Smooth micro-animations and hover effects
- Floating live chat widget with auto-replies
- Order success modal with animation
- Fully responsive — works on mobile, tablet, desktop

---

## 📦 Product Categories

| Category | Count | Examples |
|---|---|---|
| 🥦 Groceries | 6 | Broccoli, Apples, Tomatoes |
| 📱 Electronics | 4 | Earbuds, Power Bank, LED Lamp |
| 👕 Clothing | 4 | White Tee, Denim Jacket, Sneakers |
| 🧴 Beauty | 3 | Face Wash, Moisturiser, Lip Balm |
| 🥛 Dairy | 4 | Milk, Yoghurt, Cheese, Butter |
| 🍞 Bakery | 3 | Bread, Croissants, Muffins |
| 🍿 Snacks | 3 | Popcorn, Mixed Nuts, Chocolate |

---

## 🗂️ Pages

### 🏠 Home
- Hero section with CTA buttons
- Shop by Category grid
- Featured Products (top-rated & trending)
- "Why LocalMart?" feature highlights

### 🛒 Shop
- Sidebar with all filters (category, price, rating, stock)
- Sort dropdown (price, rating, name)
- Product grid with cards, badges, wishlist
- No-results state with clear guidance

### 📦 My Orders
- Full order history from session
- Order ID tracker with visual step progress bar
- Order status badges (Processing / Shipped / Delivered)

### 💬 Support
- 4 contact options (FAQ, Live Chat, Email, Phone)
- Contact form with subject selector
- Interactive FAQ accordion (6 questions)
- Floating live chat widget (bottom-right)

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| **HTML5** | Semantic page structure, modals, forms |
| **CSS3** | Custom properties, Grid, Flexbox, animations |
| **Vanilla JavaScript** | All logic — no jQuery, no frameworks |
| **localStorage** | Persistent cart, orders, and wishlist |
| **Google Fonts** | Outfit + Inter typefaces |

---

## 💡 How It Works

- **State** is managed in plain JS arrays (`cart`, `orders`, `wishlist`)
- **Persistence** uses `localStorage` so cart survives page refresh
- **Navigation** is SPA-style — pages are shown/hidden via CSS classes
- **Filtering** is done in-memory on the `PRODUCTS` array
- **Reviews** are stored in a local object and re-rendered on demand

---

## 📋 Task Requirements Checklist

- [x] E-commerce website for a local store
- [x] Customers can browse products online
- [x] Customers can purchase products (checkout flow)
- [x] Product listings with images (emojis), descriptions, prices
- [x] Shopping cart functionality
- [x] *(Optional)* Order tracking
- [x] *(Optional)* User reviews
- [x] *(Optional)* Customer support
- [x] *(Optional)* Sort & filters for products

---

## 👨‍💻 Author

Built as **Task-03** of the Prodigy Infotech internship program.

---

## 📄 License

This project is open-source and free to use for educational purposes.

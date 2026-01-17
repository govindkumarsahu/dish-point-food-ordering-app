# DishPoint – Modern Food Ordering System

A clean, responsive React.js food ordering UI built for restaurants and startups. Features menu browsing, cart management, and order flow with a modern design.

## 🚀 Features

- **Responsive Design**: Mobile, tablet, and desktop layouts
- **Modern UI**: Clean Tailwind CSS styling with smooth animations (Framer Motion)
- **Pages**: Home, Menu, Cart, Login, Signup, Order Summary
- **Cart Context**: Add/remove items, update quantities, persist to localStorage
- **Category Filtering**: Filter menu items by category
- **Search**: Real-time search across menu items
- **Dynamic Pricing**: Prices shown in INR (₹)

## 🛠 Tech Stack

- **Frontend**: React 18 + React Router
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Build Tool**: Create React App (react-scripts)

## 📦 Installation

```bash
git clone https://github.com/govindkumarsahu/dish-point-food-ordering-app.git
cd dish-point-food-ordering-app
npm install
npm start
```

## 📁 Project Structure

```
dish-point/
├─ public/
│  └─ index.html
├─ src/
│  ├─ components/
│  │  ├─ Navbar.jsx
│  │  ├─ FoodCard.jsx
│  │  ├─ CategoryFilter.jsx
│  │  └─ Footer.jsx
│  ├─ context/
│  │  └─ CartContext.jsx
│  ├─ data/
│  │  └─ foodData.js
│  ├─ pages/
│  │  ├─ Home.jsx
│  │  ├─ Menu.jsx
│  │  ├─ Cart.jsx
│  │  ├─ Login.jsx
│  │  ├─ Signup.jsx
│  │  └─ OrderSummary.jsx
│  ├─ App.js
│  ├─ index.js
│  └─ index.css
├─ tailwind.config.js
├─ postcss.config.js
├─ package.json
└─ README.md
```

## 🎨 UI Highlights

- **Hero Section**: Eye-catching banner with stats and CTA
- **Category Grid**: Quick category navigation
- **Food Cards**: Hover effects, image overlays, price badges
- **Cart**: Quantity controls, order total, checkout flow
- **Auth Pages**: Gradient backgrounds, centered forms
- **Order Summary**: Clean receipt-style layout

## 🧩 Customization

- **Menu Data**: Edit `src/data/foodData.js` to update items/categories
- **Styling**: Adjust `src/index.css` for global styles
- **Theme**: Tailwind config in `tailwind.config.js`

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

Deploy the `build/` folder to any static host (Vercel, Netlify, GitHub Pages, etc.).

### Environment Variables (Optional)

Create `.env` files for API keys or backend URLs when integrating real services.

## 📄 License

MIT License – feel free to use for personal or commercial projects.

---

**Built with ❤️ for restaurants and startups**  
If you like it, give it a ⭐ on GitHub!

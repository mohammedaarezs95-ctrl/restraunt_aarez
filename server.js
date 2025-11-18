const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// In-memory menu data (6+ items, 4 categories, veg & non-veg)
const menu = [
  {
    id: 1,
    name: "Margherita Pizza",
    category: "Main Course",
    price: 350,
    isVegetarian: true,
    description: "Classic pizza with tomato, basil and mozzarella."
  },
  {
    id: 2,
    name: "Chicken Tikka Wrap",
    category: "Main Course",
    price: 260,
    isVegetarian: false,
    description: "Spiced tandoori chicken wrapped with fresh veggies and mint chutney."
  },
  {
    id: 3,
    name: "Paneer Tikka",
    category: "Appetizer",
    price: 220,
    isVegetarian: true,
    description: "Chargrilled cottage cheese cubes marinated in spices."
  },
  {
    id: 4,
    name: "Masala Fries",
    category: "Appetizer",
    price: 150,
    isVegetarian: true,
    description: "Crispy fries tossed in masala and served with garlic mayo."
  },
  {
    id: 5,
    name: "Gulab Jamun Sundae",
    category: "Dessert",
    price: 180,
    isVegetarian: true,
    description: "Warm gulab jamun served with vanilla ice cream and syrup."
  },
  {
    id: 6,
    name: "Butter Chicken",
    category: "Main Course",
    price: 399,
    isVegetarian: false,
    description: "Creamy tomato-based curry with tender chicken pieces."
  },
  {
    id: 7,
    name: "Mango Lassi",
    category: "Beverage",
    price: 120,
    isVegetarian: true,
    description: "Creamy mango yogurt drink, a perfect refreshment."
  }
];

// Middleware to serve static files from public
app.use(express.static(path.join(__dirname, 'public')));

// GET /menu - return all menu items
app.get('/menu', (req, res) => {
  res.json(menu);
});

// GET /menu/vegetarian - return only vegetarian items
app.get('/menu/vegetarian', (req, res) => {
  const veg = menu.filter(item => item.isVegetarian);
  res.json(veg);
});

// GET /menu/categories - return unique categories with counts
app.get('/menu/categories', (req, res) => {
  const counts = menu.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});
  const categories = Object.keys(counts).map(name => ({ name, itemCount: counts[name] }));
  res.json({ categories });
});

// Start server
app.listen(PORT, () => {
  console.log(`FlavorBite Menu API server is running on http://localhost:${PORT}`);
});

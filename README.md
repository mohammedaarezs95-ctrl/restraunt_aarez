# FlavorBite - Restaurant Menu Display API

## About the Restaurant
FlavorBite is a cozy, modern bistro serving a fusion of Indian and international comfort food. We focus on fresh ingredients, bold flavors, and approachable dishes.

## Project Description
This project implements a simple Restaurant Menu Display API using Node.js and Express, plus a small frontend page to browse the menu.
**Technologies used:** Node.js, Express.js, HTML, CSS, JavaScript (fetch API)

## Menu Categories Available
- Appetizer
- Main Course
- Dessert
- Beverage

## Project Structure
```
/ (project root)
├─ package.json
├─ server.js
├─ .gitignore
├─ README.md
└─ public/
   ├─ index.html
   ├─ script.js
   └─ styles.css
```

## API Documentation

### 1) GET `/menu`
- **Method:** GET
- **Description:** Returns a JSON array with all menu items.
- **Sample Response:**
```json
[
  {
    "id": 1,
    "name": "Margherita Pizza",
    "category": "Main Course",
    "price": 350,
    "isVegetarian": true,
    "description": "Classic pizza with tomato and mozzarella"
  }
]
```

### 2) GET `/menu/vegetarian`
- **Method:** GET
- **Description:** Returns only vegetarian items (`isVegetarian: true`).

### 3) GET `/menu/categories`
- **Method:** GET
- **Description:** Returns unique categories with item counts.
- **Sample Response:**
```json
{
  "categories": [
    { "name": "Appetizer", "itemCount": 2 },
    { "name": "Main Course", "itemCount": 3 }
  ]
}
```

## Installation & Setup Instructions

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd restaurant-menu-api
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the server**
```bash
npm start
```
The server runs on **http://localhost:3000**

4. **Access**
- Frontend: `http://localhost:3000/`  
- API endpoints:
  - `http://localhost:3000/menu`
  - `http://localhost:3000/menu/vegetarian`
  - `http://localhost:3000/menu/categories`

## Features
- Simple REST API with three GET endpoints
- In-memory menu stored as a JavaScript array
- Frontend page that fetches and displays data for all items, vegetarian items, and categories
- Vegetarian items visually labeled
- Basic error handling for fetch requests

## GitHub Repository Link
- Add your repository link here after you push: `https://github.com/mohammedaarezs95-ctrl/restraunt_aarez.git`

## Author Information
- **Name:** Mohammed Aarez


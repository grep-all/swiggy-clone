# Swiggy Dummy App

This is a fully functional, self-contained dummy food delivery web application inspired by Swiggy. The application is built using React and styled with Tailwind CSS.

## Features

- Modern Swiggy-style UI
- Clean, responsive layout
- Left-aligned navigation bar
- Grid-based restaurant listing and food items
- Cart functionality with add/remove items
- Checkout summary page
- Optional login/signup UI
- Dark and light mode toggle

## Tech Stack

- React
- Tailwind CSS
- React Router
- Vite for development and build

## Project Structure

```
swiggy-dummy-app
├── index.html
├── package.json
├── vite.config.js
├── postcss.config.cjs
├── tailwind.config.cjs
├── .gitignore
├── README.md
└── src
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data
    │   └── restaurants.js
    ├── components
    │   ├── Navbar.jsx
    │   ├── RestaurantCard.jsx
    │   ├── MenuItem.jsx
    │   ├── CartItem.jsx
    │   └── ThemeToggle.jsx
    ├── pages
    │   ├── Home.jsx
    │   ├── RestaurantDetails.jsx
    │   ├── Cart.jsx
    │   ├── Checkout.jsx
    │   └── Login.jsx
    ├── context
    │   └── CartContext.jsx
    └── utils
        └── currency.js
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd swiggy-dummy-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

- Navigate through the application using the navbar.
- View featured restaurants on the home page.
- Click on a restaurant to view its menu and add items to the cart.
- Access the cart to view selected items and proceed to checkout.
- Use the login/signup form for user authentication (UI only, no backend).

## Images

Images are sourced from Unsplash using dynamic URLs based on food types and restaurant names.

## License

This project is open-source and available under the MIT License.
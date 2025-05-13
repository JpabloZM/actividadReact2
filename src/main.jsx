import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { ShopProvider } from "./context/ShopContext";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";
import CartButton from "./components/CartButton";
import "./styles/components.css";

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <ShopProvider>
      <div className="app-container">
        <ShoppingCart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
        />
        <div className="header">
          <h1>TechStore</h1>
          <CartButton onClick={() => setIsCartOpen(true)} />
        </div>
        <ProductList />
      </div>
    </ShopProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

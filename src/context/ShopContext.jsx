import { createContext, useState } from "react";

// Crear el contexto
export const ShopContext = createContext();

// Componente proveedor
export const ShopProvider = ({ children }) => {
  // Estado inicial
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Funciones para manejar el carrito
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  // Valor que se proveerá a través del contexto
  const value = {
    products,
    setProducts,
    cart,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

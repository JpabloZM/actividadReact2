import { createContext, useState } from "react";
import { initialProducts } from "../data/products";

// Crear el contexto
export const ShopContext = createContext();

// Componente proveedor
export const ShopProvider = ({ children }) => {
  // Estado inicial con los productos de ejemplo
  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]);

  // Funciones para manejar el carrito
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Verificar si el producto ya existe en el carrito
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        // Si existe, incrementar la cantidad
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        // Si no existe, añadir nuevo producto con cantidad 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === productId);

      if (existingProduct && existingProduct.quantity > 1) {
        // Si hay más de 1 unidad, reducir la cantidad
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        // Si solo hay 1 unidad o menos, eliminar el producto
        return prevCart.filter((item) => item.id !== productId);
      }
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  // Calcular el total del carrito
  const getCartTotal = () => {
    return cart.reduce(
      (total, item) => total + item.price * (item.quantity || 1),
      0
    );
  };

  // Obtener la cantidad total de items en el carrito
  const getCartItemsCount = () => {
    return cart.reduce((count, item) => count + (item.quantity || 1), 0);
  };

  // Valor que se proveerá a través del contexto
  const value = {
    products,
    setProducts,
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    getCartTotal,
    getCartItemsCount,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

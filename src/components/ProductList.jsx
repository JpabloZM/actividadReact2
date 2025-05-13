import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { ProductInfo, ProductPrice } from "../data/products";

const ProductList = () => {
  const { products, addToCart, cart, removeFromCart } = useContext(ShopContext);

  const getProductQuantity = (productId) => {
    const cartItem = cart.find((item) => item.id === productId);
    return cartItem ? cartItem.quantity : 0;
  };

  const formatPrice = (price) => {
    // Convertir a pesos colombianos (aproximadamente 1 USD = 4000 COP)
    const priceInCOP = price * 4000;
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(priceInCOP);
  };

  return (
    <div className="product-list">
      <h2>Productos Disponibles</h2>
      <div className="products-grid">
        {products.map((product) => {
          const quantity = getProductQuantity(product.id);
          return (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <ProductInfo product={product} />
              <ProductPrice price={product.price} />
              <div className="product-actions">
                {quantity > 0 ? (
                  <div className="quantity-controls">
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="quantity-btn"
                    >
                      -
                    </button>
                    <span className="cart-quantity">
                      En carrito: {quantity}
                    </span>
                    <button
                      onClick={() => addToCart(product)}
                      className="quantity-btn"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => addToCart(product)}
                    className="add-to-cart-btn"
                    disabled={product.stock === 0}
                  >
                    {product.stock === 0 ? "Sin Stock" : "Añadir al Carrito"}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;

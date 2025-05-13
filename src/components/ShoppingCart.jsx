import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const ShoppingCart = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, clearCart, getCartTotal, getCartItemsCount } =
    useContext(ShopContext);

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
    <>
      <div
        className={`cart-overlay ${isOpen ? "open" : ""}`}
        onClick={onClose}
      />
      <div className={`shopping-cart ${isOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h2>Carrito de Compras</h2>
          <button className="close-cart-btn" onClick={onClose}>
            ×
          </button>
        </div>
        <p className="cart-count">Items en el carrito: {getCartItemsCount()}</p>
        {cart.length === 0 ? (
          <p className="empty-cart">El carrito está vacío</p>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p>Precio unitario: {formatPrice(item.price)}</p>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Subtotal: {formatPrice(item.price * item.quantity)}</p>
                  </div>
                  <div className="item-actions">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="remove-btn"
                    >
                      {item.quantity > 1 ? "Reducir" : "Eliminar"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <p className="total">Total: {formatPrice(getCartTotal())}</p>
              <button onClick={clearCart} className="clear-cart-btn">
                Vaciar Carrito
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;

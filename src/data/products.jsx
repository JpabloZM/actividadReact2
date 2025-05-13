import React from "react";

export const initialProducts = [
  {
    id: 1,
    name: "Smartphone Galaxy S23",
    description:
      "Último modelo Samsung con cámara de 108MP y procesador Snapdragon 8 Gen 2",
    price: 899.99,
    image: "/src/assets/images/Samsung S23.jpeg",
    category: "Smartphones",
    stock: 15,
  },
  {
    id: 2,
    name: "Laptop MacBook Pro",
    description: 'MacBook Pro 14" con chip M2 Pro, 16GB RAM y 512GB SSD',
    price: 1999.99,
    image: "/src/assets/images/mbp14-spacegray-select-202301.jpeg",
    category: "Laptops",
    stock: 8,
  },
  {
    id: 3,
    name: "Auriculares Sony WH-1000XM5",
    description:
      "Auriculares inalámbricos con cancelación de ruido líder en la industria",
    price: 399.99,
    image: "/src/assets/images/Auriculares Sony WH-1000XM5.jpeg",
    category: "Audio",
    stock: 20,
  },
  {
    id: 4,
    name: "Smartwatch Apple Watch Series 8",
    description: "Reloj inteligente con monitor de frecuencia cardíaca y SpO2",
    price: 399.99,
    image: "/src/assets/images/Smartwatch Apple Watch Series 8.jpeg",
    category: "Wearables",
    stock: 12,
  },
  {
    id: 5,
    name: "Tablet iPad Pro",
    description:
      'iPad Pro 12.9" con chip M2, 256GB y pantalla Liquid Retina XDR',
    price: 1099.99,
    image: "/src/assets/images/Tablet iPad Pro.jpeg",
    category: "Tablets",
    stock: 10,
  },
  {
    id: 6,
    name: "Cámara Sony Alpha A7IV",
    description:
      "Cámara mirrorless full-frame con sensor de 33MP y grabación 4K",
    price: 2499.99,
    image: "/src/assets/images/Cámara Sony Alpha A7IV.jpeg",
    category: "Fotografía",
    stock: 5,
  },
];

// Componente para mostrar información del producto
export const ProductInfo = ({ product }) => {
  return (
    <div className="product-info">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="category">Categoría: {product.category}</p>
      <p className="stock">Stock disponible: {product.stock}</p>
    </div>
  );
};

// Componente para mostrar el precio formateado
export const ProductPrice = ({ price }) => {
  const formatPrice = (price) => {
    const priceInCOP = price * 4000;
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(priceInCOP);
  };

  return <p className="price">{formatPrice(price)}</p>;
};

export default initialProducts;

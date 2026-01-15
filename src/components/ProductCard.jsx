import React from 'react'

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <li>
      {product.name}
      <button
        data-testid={`product-${product.id}`}
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </li>
  )
}

export default ProductCard


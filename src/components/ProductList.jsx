export const sampleProducts = [
  { id: 1, name: 'Apple', category: 'Fruits' },
  { id: 2, name: 'Banana', category: 'Fruits' },
  { id: 3, name: 'Milk', category: 'Dairy' }
]

const ProductList = ({ products, onAddToCart }) => {
  if (!products || products.length === 0) {
    return <p>No products available</p>
  }

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          <button
            data-testid={`product-${product.id}`}
            onClick={() => onAddToCart(product)}
          >
            Add
          </button>
        </li>
      ))}
    </ul>
  )
}

export default ProductList




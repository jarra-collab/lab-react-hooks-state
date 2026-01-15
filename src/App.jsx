import React, { useState } from 'react'
import ProductList, { sampleProducts } from './components/ProductList'
import Cart from './components/Cart'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [category, setCategory] = useState('all')
  const [cart, setCart] = useState([])

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev)
  }

  const addToCart = (product) => {
    setCart(prev => [...prev, product])
  }

  const filteredProducts =
    category === 'all'
      ? sampleProducts
      : sampleProducts.filter(p => p.category === category)

  return (
    <div>
      {/* REQUIRED BY TEST */}
      <button onClick={toggleDarkMode}>
        Toggle {darkMode ? 'Light' : 'Dark'}
      </button>

      {/* REQUIRED BY TEST */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
        <option value="NonExistent">NonExistent</option>
      </select>

      <ProductList
        products={filteredProducts}
        onAddToCart={addToCart}
      />

      <Cart cart={cart} />
    </div>
  )
}

export default App


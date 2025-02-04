import { useEffect, useState } from 'react'

import './App.css'

const useProducts = () => {
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('전체')
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch('https://fakestoreapi.com/products')
      const data = res.json()
      return data
    }
    const fetchCategory = async () => {
      const res = await fetch('https://fakestoreapi.com/products/categories')
      const data = res.json()
      return data
    }

    fetchProduct().then((res) => setProducts(res))
    fetchCategory().then((res) => setCategory(res))
    setFilteredProducts(products)
  }, [])

  useEffect(() => {
    //선택된 카테고리 없는 경우
    if (selectedCategory === '전체') {
      setFilteredProducts(products)
      return
    }
    const product = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
      const data = res.json()
      return data
    }
    product().then((res) => setFilteredProducts(res))
  }, [selectedCategory, products])

  return { category, filteredProducts, selectedCategory, setSelectedCategory }
}

function App() {
  const { category, filteredProducts, selectedCategory, setSelectedCategory } = useProducts()
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        카테고리
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option>전체</option>
          {category.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      {filteredProducts.map((product) => (
        <div key={product.id} style={{ textAlign: 'start' }}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <div style={{ color: 'orange' }}>{product.price}</div>
        </div>
      ))}
    </div>
  )
}

export default App

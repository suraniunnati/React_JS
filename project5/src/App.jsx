import { useState } from 'react'
import './App.css'
import Product from './component/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Product/>
    </>
  )
}

export default App

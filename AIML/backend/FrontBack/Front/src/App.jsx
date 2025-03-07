import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';
function App() {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const apidata = await axios.get("http://localhost:3000/api");
      setproducts(apidata.data)
    }
    fetchdata()
  }, [])


  return (
    <div>
      <h1>All the product details are given below:</h1>
      {/* {JSON.stringify(products)} */}
      {products.map((product) => {
        return (
          <div>
            <h2>{product.title}</h2>
            <img src={product.thumbnail}></img>
          </div>
        )
      })}
    </div>
  )
}
export default App

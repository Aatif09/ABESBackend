import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'; //npm i axios
function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const apidata = await axios.get("http://localhost:3000/api");
      setProducts(apidata.data);
    }
    fetchdata();
  }, [])

  return (
    <div>
      <h1>All the product details are given below:</h1>
      {/* {JSON.stringify(products)} */}
      {products.map((product) => {
        return (
          <div>
            <h3>{product.title}</h3>
            <img src={product.thumbnail}></img>
          </div>
        )
      })}
    </div>
  )
}
export default App

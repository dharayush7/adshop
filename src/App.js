import { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import { procductData } from './api/api';
import ProductCard from './components/card';
import Cart from './components/cart';



function  App() {

  const [products, setProducts] = useState([]);
  useEffect(() =>{
    procductData().then((data) => setProducts(data));
  },[])

  
  return (
    <>
      <Cart/>
      <div className="container-fluid row">
      
        {
          products ? products.map((product)=>(<ProductCard value={product} key={product.id}/>)) : <h1> Loading... </h1>
        }
      </div>
    </>
  );
}

export default App;

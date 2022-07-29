import React, { useState } from 'react';
import GridProduct from '../components/GridProduct';

const Products = () => {
  const [products, setProducts] = useState([]);
  
  return (
    <>
        <GridProduct products={products} setProducts={setProducts}/>
    </>
  )
}

export default Products
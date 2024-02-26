import React from 'react'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import NavBar from '../components/Nav'
import { data } from '../db/ProductDB'

const Products = () => {
  return (
    <div>
        
        {/* <NavBar/> */}
       <Hero heading="Welcome to Products Page"/> 
       <div className="d-flex justify-content-between flex-wrap gap-3">
       {data.map((product) => {
        return(
            <div className="" key = {product.id}>
                <ProductCard product = {product}/>
            </div>
        );
       })}
       </div>       
    </div>
  );
};

export default Products
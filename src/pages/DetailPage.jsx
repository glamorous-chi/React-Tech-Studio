import React from 'react'
import { AlertHeading } from 'react-bootstrap'
import Hero from '../components/Hero'
import DetailCard from '../components/DetailCard'
import { useParams } from 'react-router-dom'
import { data } from '../db/ProductDB'

const DetailPage = () => {
    const {productId} =useParams()
    // console.log(`Product ${productId} clicked`);
    // console.log(data);

    // Go into the data and find the product with the id === productId
    const chiomasProducts  = data.find((p) => p.id === parseInt(productId))
    // console.log(chiomasProducts);

  return (
    <div>
        <Hero heading = "Details Page" />
        <div>
            <h3>Product {productId} clicked</h3>
        </div>
        <DetailCard product = {chiomasProducts}/>
        
    </div>
  )
}

export default DetailPage
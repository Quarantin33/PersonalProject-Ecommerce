import React from 'react'
import "./ProductContainer.css"

const ProductContainer = ({ id, image, title, price, description, category }) => {
  return (
    <div className='container-product'>
        <div className='image-item'>
            <img className='image-product' src={image} alt={title}/>
        </div>
        <div className='description-item'>
            <h1>{title}</h1>
            <h3><b>Category: </b>{category}</h3>
            <div>{description}</div>
            <p><b>Price: </b><span>${price}</span></p>
        </div>
    </div>
  )
}

export default ProductContainer
import React from 'react'
import {Link} from 'react-router-dom'

const Product = props => {
  return (
    <div>
      <Link to={`/products/${props.product.id}`}>
        <img src={props.product.imageUrl} width="400" height="300" />
      </Link>
      <Link to={`/products/${props.product.id}`}>
        <h4>{props.product.name}</h4>
      </Link>
      <p>{props.product.description}</p>
    </div>
  )
}

export default Product

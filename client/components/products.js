import React from 'react'
import {getProducts} from '../store'
import {connect} from 'react-redux'
import Product from './product'

class Products extends React.Component {
  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    const products = this.props.products

    return (
      <div className="products-container">
        <div className="item-container">
          {products ? (
            products.map(product => {
              return <Product key={product.id} product={product} />
            })
          ) : (
            <div>No products :(</div>
          )}
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    products: state.product.products
  }
}

const mapDispatch = dispatch => {
  return {
    getProducts: () => dispatch(getProducts())
  }
}

export default connect(mapState, mapDispatch)(Products)

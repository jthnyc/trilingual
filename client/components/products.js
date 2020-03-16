import React from 'react'
import {gotProducts} from '../store'
import {connect} from 'react-redux'

class Products extends React.Component {
  componentDidMount() {
    this.props.gotProducts()
  }

  render() {
    const products = this.props.products
    // console.log('PRODUCTS: ', products)
    return (
      <div>
        Products:
        <ul>
          {products.map(product => {
            return (
              <li key={product.id}>
                {/* <img src={product.imageUrl}/> */}
                {product.name}
                Description: {product.description}
              </li>
            )
          })}
        </ul>
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
    gotProducts: () => dispatch(gotProducts())
  }
}

export default connect(mapState, mapDispatch)(Products)

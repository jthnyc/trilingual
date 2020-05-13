import React from 'react'
import {gotProducts} from '../store'
import {connect} from 'react-redux'

class Products extends React.Component {
  componentDidMount() {
    this.props.gotProducts()
  }

  render() {
    const products = this.props.products

    return (
      <div className="products-container">
        <ul className="item-container">
          {products.map(product => {
            return (
              <li key={product.id} className="item">
                <img src={product.imageUrl} width="400" height="300" />
                <h4>{product.name}</h4>
                <p>{product.description}</p>
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

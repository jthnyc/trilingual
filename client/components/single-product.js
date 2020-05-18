import React from 'react'
import {getSingleProduct} from '../store'
import {connect} from 'react-redux'

class SingleProduct extends React.Component {
  componentDidMount() {
    this.props.getSingleProduct(this.props.productId)
  }

  render() {
    const currentProduct = this.props.currentProduct

    return (
      <div className="single-product-container">
        <img src={currentProduct.imageUrl} />
        <div className="product-detail">
          <h3>{currentProduct.name}</h3>
          <p>
            {currentProduct.description ? (
              currentProduct.description
            ) : (
              <div>Error in inventory</div>
            )}
          </p>
          <div>
            <h5>${currentProduct.price}</h5>
            <p>{currentProduct.inventory} left</p>
            <input placeholder="quantity" />
            <button type="submit">Get It Now</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = (state, ownProps) => {
  return {
    currentProduct: state.product.currentProduct,
    productId: ownProps.match.params.id
  }
}

const mapDispatch = dispatch => {
  return {
    getSingleProduct: id => dispatch(getSingleProduct(id))
  }
}

export default connect(mapState, mapDispatch)(SingleProduct)

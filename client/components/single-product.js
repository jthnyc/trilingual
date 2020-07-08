import React from 'react'
import {getSingleProduct, addToCart, me} from '../store'
import {connect} from 'react-redux'

class SingleProduct extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    this.props.getSingleProduct(this.props.productId)
    this.props.getMe()
  }

  handleClick(e) {
    e.preventDefault()
    console.log('clicked add to cart', e)
    this.props.addToCart(this.props.userId, this.props.productId)
  }

  render() {
    const currentProduct = this.props.currentProduct

    return (
      <div className="single-product-container">
        <img src={currentProduct.imageUrl} />
        <div className="product-detail">
          <h3>{currentProduct.name}</h3>
          <div>
            <h4>${currentProduct.price}</h4>
            <p>{currentProduct.inventory} left</p>
            <input placeholder="quantity" />
            <button type="submit">Get It Now</button>
          </div>
          <p>
            {currentProduct.description
              ? currentProduct.description
              : 'Error in inventory'}
          </p>
        </div>
      </div>
    )
  }
}

const mapState = (state, ownProps) => {
  return {
    currentProduct: state.product.currentProduct,
    productId: ownProps.match.params.id,
    userId: state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    getSingleProduct: id => dispatch(getSingleProduct(id)),
    getMe: () => dispatch(me()),
    addToCart: (userId, productId) => dispatch(addToCart(userId, productId))
  }
}

export default connect(mapState, mapDispatch)(SingleProduct)

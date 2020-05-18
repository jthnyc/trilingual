import React from 'react'
import {getSingleProduct} from '../store'
import {connect} from 'react-redux'

class SingleProduct extends React.Component {
  componentDidMount() {
    console.log('SINGLE PRODUCT PROPS: ', this.props.currentProduct)
    this.props.getSingleProduct(this.props.productId)
  }

  render() {
    const currentProduct = this.props.currentProduct

    return (
      <div>
        <img src={currentProduct.imageUrl} />
        <h3>{currentProduct.name}</h3>
        <p>{currentProduct.description}</p>
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

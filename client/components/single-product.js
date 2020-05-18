import React from 'react'
import {getSingleProduct} from '../store'
import {connect} from 'react-redux'

class SingleProduct extends React.Component {
  componentDidMount() {
    this.props.getSingleProduct(this.props.productId)
  }

  render() {
    console.log('this props: ', this.props)
    return <div>{this.props.currentProduct.name}</div>
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

import React from 'react'
import {gotSingleProduct} from '../store'
import {connect} from 'react-redux'

class SingleProduct extends React.Component {
  componentDidMount() {
    this.props.gotSingleProduct(this.props.productId)
  }

  render() {
    const product = this.props.currentProduct
    console.log('PRODUCT: ', product)
    return <div>{product}</div>
  }
}

const mapState = state => {
  return {
    currentProduct: state.product.currentProduct
  }
}

const mapDispatch = dispatch => {
  return {
    gotSingleProduct: id => dispatch(gotSingleProduct(id))
  }
}

export default connect(mapState, mapDispatch)(SingleProduct)

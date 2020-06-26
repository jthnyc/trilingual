import React from 'react'
import {connect} from 'react-redux'
import {getCartItems} from '../store'

class Cart extends React.Component {
  render() {
    console.log('Props in Cart: ', this.props)

    return (
      <div>
        <div>
          <p>No items in cart</p>
          <h3>Time to treat yourself</h3>
        </div>

        <div>
          <div>
            <h2>Order Summary</h2>
            <h4>Subtotal: $20</h4>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    cartItems: state.cart.cartItems,
    userId: state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    getCartItems: userId => dispatch(getCartItems(userId))
  }
}

export default connect(mapState, mapDispatch)(Cart)

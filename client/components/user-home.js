import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Redirect} from 'react-router'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {firstName, image, product} = props
  console.log('PROPS IN USER: ', props)

  if (!firstName) {
    return <Redirect to="/products" />
  } else {
    return (
      <div>
        <img src={image} alt={firstName} />
        <h2>Welcome, {firstName}</h2>
        <h3>
          Recently Viewed:
          <div>
            <h4>{product.name}</h4>
            <img src={product.imageUrl} alt={product.id} />
          </div>
        </h3>
        <h3>Orders</h3>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  console.log('STATE IN USER: ', state)
  return {
    firstName: state.user.firstName,
    image: state.user.imageUrl,
    product: state.product.currentProduct
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}

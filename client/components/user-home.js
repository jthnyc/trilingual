import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Redirect} from 'react-router'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {firstName, image} = props

  if (!firstName) {
    return <Redirect to="/products" />
  } else {
    return (
      <div>
        <img src={image} alt={firstName} />
        <h2>Welcome, {firstName}</h2>
        <h3>Recently Viewed</h3>
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
    image: state.user.imageUrl
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}

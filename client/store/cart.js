import axios from 'axios'

// ACTION TYPES
const GOT_CART_ITEMS = 'GOT_CART_ITEMS'
const ADD_TO_CART = 'ADD_TO_CART'
const DELETE_FROM_CART = 'DELETE_FROM_CART'

// INITIAL STATE
const initialState = {
  cartItems: []
}

// ACTION CREATORS
const gotCartItems = cartitems => ({
  type: GOT_CART_ITEMS,
  cartItems
})

const addToCart = productOrder => ({
  type: ADD_TO_CART,
  productOrder
})

const deleteFromCart = productId => ({
  type: DELETE_FROM_CART,
  productId
})

// THUNK CREATORS

// REDUCER

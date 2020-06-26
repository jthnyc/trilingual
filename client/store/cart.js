import axios from 'axios'

// ACTION TYPES
const GOT_CART_ITEMS = 'GOT_CART_ITEMS'
const UPDATE_QUANTITY = 'UPDATED_QUANTITY'
const ADDED_TO_CART = 'ADDED_TO_CART'
const DELETE_FROM_CART = 'DELETE_FROM_CART'

// INITIAL STATE
const initialState = {
  cartItems: []
}

// ACTION CREATORS
const gotCartItems = cartItems => ({
  type: GOT_CART_ITEMS,
  cartItems
})

const updatedQuantity = productOrder => ({
  type: UPDATE_QUANTITY,
  productOrder
})

const addedToCart = productOrder => ({
  type: ADDED_TO_CART,
  productOrder
})

const deletedFromCart = productId => ({
  type: DELETE_FROM_CART,
  productId
})

// THUNK CREATORS
export const getCartItems = userId => async dispatch => {
  try {
    const {data} = await axios.get(`/api/cart/${userId}`)
    if (typeof data === 'string') {
      dispatch(gotCartItems([]))
    } else {
      dispatch(gotCartItems(data))
    }
  } catch (error) {
    console.error(error)
  }
}

export const addToCart = (userId, productId) => async dispatch => {
  try {
    const productOrder = await axios.post(`/api/cart/${userId}`, {
      productId: productId
    })
    alert('Added to cart')
    if (productOrder.data.quantity === 1) {
      dispatch(addedToCart(productOrder.data))
    } else {
      dispatch(updatedQuantity(productOrder.data))
    }
  } catch (error) {
    console.error(error)
  }
}

export const deleteProductFromCart = (userId, productId) => async dispatch => {
  try {
    await axios.delete(`/api/cart/${userId}`, {
      data: {
        userId: userId,
        productId: productId
      }
    })
    dispatch(deletedFromCart(productId))
  } catch (error) {
    console.error(error)
  }
}

export const incrementItemQuantity = (userId, productId) => async dispatch => {
  try {
    const productOrder = await axios.put(`/api/cart/${userId}`, {
      productId: productId,
      change: 'increment'
    })
    dispatch(updatedQuantity(productOrder.data))
  } catch (error) {
    console.error(error)
  }
}

export const decrementItemQuantity = (userId, productId) => async dispatch => {
  try {
    const productOrder = await axios.put(`/api/cart/${userId}`, {
      productId: productId,
      change: 'decrement'
    })
    dispatch(updatedQuantity(productOrder.data))
  } catch (error) {
    console.error(error)
  }
}

// REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case GOT_CART_ITEMS:
      return {...state, cartItems: action.cartItems}
    case ADDED_TO_CART:
      return {...state, cartItems: [...state.cartItems, action.productOrder]}
    case UPDATE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map(item => {
          if (item.productId !== action.productOrder.productId) {
            return item
          } else {
            const newItem = action.productOrder
            return newItem
          }
        })
      }
    case DELETE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          item => item.productId !== action.productId
        )
      }

    default:
      return state
  }
}

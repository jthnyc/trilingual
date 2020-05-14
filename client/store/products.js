import axios from 'axios'

/**
 * ACTION TYPES
 */
const GOT_PRODUCTS = 'GOT_PRODUCTS'
const GOT_SINGLE_PRODUCT = 'GOT_SINGLE_PRODUCT'

/**
 * INITIAL STATE
 */
const initialState = {
  products: [],
  currentProduct: {}
}

/**
 * ACTION CREATORS
 */
const gotProducts = products => ({type: GOT_PRODUCTS, products})
const gotSingleProduct = currentProduct => ({
  type: GOT_SINGLE_PRODUCT,
  currentProduct
})

/**
 * THUNK CREATORS
 */
export const getProducts = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/products')
    dispatch(gotProducts(data))
  } catch (err) {
    console.error(err)
  }
}

export const getSingleProduct = id => async dispatch => {
  try {
    const {data} = await axios.get(`/api/products/${id}`)
    dispatch(gotSingleProduct(data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GOT_PRODUCTS:
      return {...state, products: action.products}
    case GOT_SINGLE_PRODUCT:
      return {...state, currentProduct: action.currentProduct}
    default:
      return state
  }
}

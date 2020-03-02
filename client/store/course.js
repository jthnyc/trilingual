import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_COURSES = 'GET_COURSES'
const GET_SINGLE_COURSE = 'GET_SINGLE_COURSE'

/**
 * INITIAL STATE
 */
const initialState = {
  courses: [],
  currentProduct: {}
}

/**
 * ACTION CREATORS
 */
const getCourses = courses => ({type: GET_COURSES, courses})
const getSingleCourse = singleCourse => ({
  type: GET_SINGLE_COURSE,
  singleCourse
})

/**
 * THUNK CREATORS
 */
export const gotCourses = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/courses')
    dispatch(getCourses(data))
  } catch (err) {
    console.error(err)
  }
}

export const gotSingleCourse = id => async dispatch => {
  try {
    const {data} = await axios.get(`/api/courses/${id}`)
    dispatch(getSingleCourse(data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_COURSES:
      return {...state, courses: action.courses}
    case GET_SINGLE_COURSE:
      return {...state, currentProduct: action.currentProduct}
    default:
      return state
  }
}

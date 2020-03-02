import React from 'react'
import {gotCourses} from '../store'
import {connect} from 'react-redux'

class Courses extends React.Component {
  componentDidMount() {
    this.props.gotCourses()
  }

  render() {
    const courses = this.props.courses
    return (
      <div>
        Courses:
        <ul>
          {courses.map(course => {
            return (
              <li key={course.id}>
                {course.language}: Level {course.level}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapState = state => {
  return {
    courses: state.course.courses
  }
}

const mapDispatch = dispatch => {
  return {
    gotCourses: () => dispatch(gotCourses())
  }
}

export default connect(mapState, mapDispatch)(Courses)

import { getAuthors } from '../api/authorApi';
import { getCourses, deleteCourse, saveCourse } from '../api/courseApi';

export const fetchAuthors = () => {
  return dispatch => {
    getAuthors().then(data => {
      return dispatch({
        type: 'GET_AUTHORS',
        authors: data
      })
    })
  }
}

export const fetchCourses = () => {
  return dispatch => {
    getCourses().then(data => {
      return dispatch({
        type: 'GET_COURSES',
        courses: data
      })
    });
  }
}

export const addNewCourse = (newCourse) => {
  return dispatch => {
    saveCourse(newCourse).then(data => {
      console.log(data);
      return dispatch({
        type: 'ADD_NEW_COURSE',
        newCourse
      })
    })

  }
}

export const toggleRedirect = () => {
  return {
    type: 'TOGGLE_REDIRECT'
  }
}

export const deletingCourse = (id) => {
  return dispatch => {
    deleteCourse(id).then(data =>
      console.log(data))
    dispatch({
      type: 'DELETE',
      id
    });
  }
}
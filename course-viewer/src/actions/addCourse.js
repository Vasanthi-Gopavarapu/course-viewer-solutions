

export const addCourse = (authors) => {
   return {
    type:'ADD_COURSE',
    authors
  };
}

export const viewCourses = (courses) => {
  return {
    type: 'VIEW_COURSES',
    courses
  };
}

export const addNewCourse = (newCourse) => {
  return {
    type: 'ADD_NEW_COURSE',
    newCourse
  }
}

export const toggleRedirect = () => {
  return {
    type: 'TOGGLE_REDIRECT'
  }
}

export const deleteCourse = (id) => {
  return {
    type: 'DELETE',
    id
  }
}
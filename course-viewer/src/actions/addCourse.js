

export const addCourse = (data) => {
   return {
    type:'ADD_COURSE',
    data
  };
}

export const viewCourses = (data) => {
  return {
    type: 'VIEW_COURSES',
    data
  };
}
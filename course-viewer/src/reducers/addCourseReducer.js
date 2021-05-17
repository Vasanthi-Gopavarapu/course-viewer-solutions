import defaultState from '../index';

export default function addCourseReducer(state = defaultState, action) {
    switch (action.type) {
        case 'GET_COURSES':
            return { ...state, courses: action.courses };
        case 'GET_AUTHORS':
            return { ...state, authors: action.authors };
        case 'ADD_NEW_COURSE':
            return { ...state, redirect: 1 };
        case 'DELETE':
            let newState = { ...state }
            newState.courses = newState.courses.filter(course => {
                return course.id !== action.id;
            })
            //console.log(newState);
            return newState;
        case 'TOGGLE_REDIRECT':
            return { ...state, redirect: null }
        default:
            return { ...state };
    }
}

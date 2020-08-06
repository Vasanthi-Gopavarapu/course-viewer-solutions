import defaultState from '../index';
import { saveCourse, deleteCourse } from '../api/courseApi';

export default function addCourseReducer(state = defaultState, action){
    switch(action.type) {
        case 'VIEW_COURSES': 
        return {...state, courses: action.courses};
        case 'ADD_COURSE':
        return {...state, authors: action.authors};
        case 'ADD_NEW_COURSE':
            saveCourse(action.newCourse);
        return {...state, newCourse: action.newCourse,redirect: 1};
        case 'DELETE':
            deleteCourse(action.id);
            return {...state}
        case 'TOGGLE_REDIRECT':
            return {...state, redirect: null}
        default:
        return state;    }
   
    
}

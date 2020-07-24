import defaultState from '../index';
//import { getCourses } from '../api/courseApi';

export default function addCourseReducer(state = defaultState, action){
    switch(action.type) {
        case 'VIEW_COURSES': 
        return {...state, items: action.data};
        case 'ADD_COURSE':
        return {...state, authors: action.data};
        default:
        return state;    }
   
    
}

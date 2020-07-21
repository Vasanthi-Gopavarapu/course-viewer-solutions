import defaultState from '../index';
//import { getCourses } from '../api/courseApi';

export default function addCourseReducer(state = defaultState, action){
    if(action.type === 'ADD_COURSE')
    {
        const obj = action.text;
        const items = obj.map((item,i) => item.title);
        console.log(items);
        return {...state, value:"", items};
           
    }
    return state;
}

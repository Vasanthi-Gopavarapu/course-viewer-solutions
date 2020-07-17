import defaultState from '../index';

export default function addCourseReducer(state = defaultState, action){
    if(action.type === 'ADD_COURSE')
    {
        const items = state.items.concat(action.text);
        
        return {...state, value:action.text, items};
           
    }
    return state;
}

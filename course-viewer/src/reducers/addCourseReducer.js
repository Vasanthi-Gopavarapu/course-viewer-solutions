import defaultState from '../index';
//import { getCourses } from '../api/courseApi';

export default function addCourseReducer(state = defaultState, action){
    if(action.type === 'ADD_COURSE')
    {
        let items = action.data;
         /*let author = items.filter(item => {
            for(let i=0; i < authors.length; i++){
                if(item.data.authorId === authors[i].id) {
                    item.data.authorId = authors[i].name;
                    break;
                }
            }
            return items;
        })*/
        
        console.log(items);
        return {...state, value:"", items};
           
    }
    return state;
}

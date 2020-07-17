import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import addCourse from './actions/addCourse';



const Courses = (props) => {
    let courseName, courseForm;
     
      return (
            <div className="container p-5 my-3 bg-light">
              <h1>Courses</h1>
              <Addedcourses items={props.items}/>
              <h2>Add Courses</h2>
              <form ref={node => (courseForm= node)} onSubmit={ (e) => {
                   e.preventDefault();
                   props.addCourse(courseName.value);
                   courseForm.reset();
                    }                 
                }>
                    <div className="form-group">
                    <label>
                    <input type="text" ref={node => (courseName= node)} placeholder=""/>
                    </label>
                    <input type="submit" value="Save" />
                  </div>
               </form>
         </div> 
        );
   
}

function Addedcourses(props) {

    const items = props.items
    if(items.length > 0)
    {
    const listItems = items.map((item, index) => 
    <li key={index}> {item} </li>
    );
    return (
        <ul>
            {listItems}
        </ul>
        );

    }

    return null;
    
}

const mapStateToProps = (state) => {   
        return {
            value: state.value,
            items: state.items
        }
}

const mapDispatchToProps = (dispatch) => ({
            addCourse: text => dispatch(addCourse(text))
    })

export default connect(mapStateToProps, mapDispatchToProps)(Courses);




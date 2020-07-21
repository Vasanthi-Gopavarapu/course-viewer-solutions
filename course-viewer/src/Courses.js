import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import addCourse from './actions/addCourse';
import { getCourses } from './api/courseApi';

class Courses extends React.Component {
    constructor(props){
        super(props);
        console.log("its constructor",props);
    }
    componentDidMount() {
        this.renderCourse();
    }

    renderCourse = async () => {
        let promise = getCourses();
        let obj = await promise.then(data => data)
        console.log(obj);
        return this.props.addCourse(obj);
    }
         render() {
             //let resp = this.renderCourse();
             //console.log(resp);
            return (
                <div className="container p-5 my-3 bg-light">
                  <h1>Courses</h1>
                  <ul>
                      <View items={this.props.items}></View>
                  </ul>
               </div> 
            );
       
          }
     
}

function View(props) {
    let items = props.items;
    const course = items.map((item,i) => {
        return (
            <li key={i}>{item}</li>
        );
    }
    );
    return course;
}
   

 /*function Addedcourses(props) {
    const course = getCourses();
    console.log(course);
    const list = course.then(data => data);
    console.log(list);
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
    
}*/

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


/* 
  let courseName, courseForm;
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
               </form> -->
*/ 

import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import addCourse from './actions/addCourse';
import { getCourses } from './api/courseApi';
import { getAuthors } from './api/authorApi';
import { NavLink } from 'react-router-dom';

class Courses extends React.Component {
    constructor(props){
        super(props);
        console.log("its constructor",props);
    }
    componentDidMount() {
        this.renderCourse();
    }

    renderCourse = async () => {
        let coursePromise = getCourses();
        let authorPromise = getAuthors();
        let obj = await coursePromise.then(data => data)
        let author = await authorPromise.then(data => data);
        let data = obj.filter(item => {
            for(let i=0; i < author.length; i++){
                if(item.authorId === author[i].id) {
                    item.authorId = author[i].name;
                    break;
                }
            }
            return item;
        })
        console.log(data); 
        return this.props.addCourse(data);
    }
         render() {
             return (
                <div>
                  <h1>Courses</h1>
                  <p><NavLink to="/course" className="text-primary"
                                activeClassName="text-danger">
                        <button type="button" className="btn btn-primary">
                            Add Course
                        </button>
                    </NavLink>
                </p>
                  <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                    <View items={this.props.items}></View>
                    </tbody>
                    </table>
               </div> 
            );
       
          }
     
}

function View(props) {
    let items = props.items;
    const course = items.map((item,i) => {
        return (
            <tr key={item.id}>
                <td><span className="badge badge-light">Watch</span></td>
                <td className="text-primary" >{item.title}</td>
                <td>{item.authorId}</td>
                <td>{item.category}</td>
            </tr>
            
        );
    }
    );
    return course;
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

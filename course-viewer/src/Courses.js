import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { viewCourses, addCourse, addNewCourse, toggleRedirect, deleteCourse } from './actions/addCourse';
import { getCourses } from './api/courseApi';
import { getAuthors } from './api/authorApi';
import { NavLink, Link } from 'react-router-dom';
import { Button, Layout, Typography } from 'antd';
import 'antd/dist/antd.css';

const { Content } = Layout;

const { Title } = Typography;

class Courses extends React.Component {
   
    componentDidMount() {
        this.props.toggleRedirect();
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
        return this.props.viewCourses(data);
    }
         render() {
             return (
                <Content>
                  <Title>Courses</Title>
                  <NavLink to="/course" >
                        <Button type="primary" size='large' style={{marginBottom: 10}}>
                            Add Course
                        </Button>
                    </NavLink>
                  <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Category</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    <View params={this.props} ></View>
                    </tbody>
                    </table>
               </Content> 
            );
       
          }
     
}

function View(props) {
    let items = props.params.courses;
    const course = items.map((item,i) => {
        let {slug} = item;
        return (
            <tr key={item.id}>
                <td><span className="badge badge-light">Watch</span></td>
                <td>
                
                <Link to={{
                    pathname: `/course/${slug}`, 
                    query:{
                       item
                    }
                    }} className="text-primary" >
                <span>{item.title}</span>
                </Link>
                
                </td>
                <td>{item.authorId}</td>
                <td>{item.category}</td>
                <td><button type="button" className="btn btn-outline-danger"
                onClick={() => {
                    props.params.deleteCourse(item.id);
                }}>Delete</button></td>
            </tr>
            
        );
    }
    );
    return course;
}
   

export const mapStateToProps = (state) => {   
        return {
            authors: state.authors,
            courses: state.courses,
            newCourse: state.newCourse,
            redirect: state.redirect
        }
}

export const mapDispatchToProps = (dispatch) => ({
    viewCourses: data => dispatch(viewCourses(data)),
    addCourse: data => dispatch(addCourse(data)),
    addNewCourse: data => dispatch(addNewCourse(data)),
    toggleRedirect: () => dispatch(toggleRedirect()),
    deleteCourse: (id) => dispatch(deleteCourse(id))
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

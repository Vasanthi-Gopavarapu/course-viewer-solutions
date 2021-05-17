import React from 'react';
import { connect } from 'react-redux';
import '../../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Viewcourses from "./Viewcourses";
import { fetchCourses, addNewCourse, toggleRedirect, deletingCourse, fetchAuthors } from '../../actions/addCourse';
import { NavLink, Link } from 'react-router-dom';
import { Button, Layout, Typography } from 'antd';
import 'antd/dist/antd.css';

const { Content } = Layout;

const { Title } = Typography;

class Courses extends React.Component {

    componentDidMount() {
        this.props.toggleRedirect();
        this.props.fetchCourses();
        this.props.fetchAuthors();
    }

    
    render() {
        let courses = this.props.courses;
        let authors = this.props.authors;

        let data = courses.filter(item => {
            for (let i = 0; i < authors.length; i++) {
                if (item.authorId === authors[i].id) {
                    item.authorId = authors[i].name;
                    break;
                }
            }
            return item;
        })
        return (
            <Content>
                <Title>Courses</Title>
                <NavLink to="/course" >
                    <Button type="primary" size='large' style={{ marginBottom: 10 }}>
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
                        <Viewcourses params={data} onClick={this.props.deleteCourse}></Viewcourses>
                    </tbody>
                </table>
            </Content>
        );

    }

}




export const mapStateToProps = (state) => {
    return {
        authors: state.authors,
        courses: state.courses,
        redirect: state.redirect
    }
}

export const mapDispatchToProps = {
    fetchCourses: fetchCourses,
    fetchAuthors: fetchAuthors,
    deleteCourse: deletingCourse,
    addNewCourse: addNewCourse,
    toggleRedirect: toggleRedirect
}

export default connect(mapStateToProps, mapDispatchToProps)(Courses);


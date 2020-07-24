import React from 'react';
import { getAuthors } from './api/authorApi';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './Courses';
import { NavLink } from 'react-router-dom';

class Addcourse extends React.Component {
    componentDidMount() {
        this.renderAuthor();
    }
   async renderAuthor() {
        let authorData = getAuthors();
        let data = await authorData.then(json => json);
        console.log(data);
        return this.props.addCourse(data);
    }
    render() {
        return (
            <div className="container">
                <h1>Add Course</h1>
                <form>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Author</label>
                        <div>{this.data} </div>
                        <select className="form-control" >
                            <option>Select Author</option>
                            {this.props.authors.map(author => 
                            <option key={author.id} value={author.name}> {author.name} </option>)}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <input type="text" className="form-control" />
                    </div>
                    <NavLink to="/courses" className="text-primary"
                                activeClassName="text-danger">
                    <button type="button" className="btn btn-primary">
                                    Save</button>
                    </NavLink>
                    
                 </form>          
            </div>
        );
    }
    
}



export default connect(mapStateToProps, mapDispatchToProps)(Addcourse);
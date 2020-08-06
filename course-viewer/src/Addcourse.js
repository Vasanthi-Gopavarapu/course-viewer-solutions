import React from 'react';
import { getAuthors } from './api/authorApi';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './Courses';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';

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
        //console.log(this.props.location.query);
        let course = this.props.location.query;
        let {id, title, authorId, category } = course?course.item:"";
        let { selectedIndex }="";
       if(this.props.redirect){
           return <Redirect to="/courses" />
       }
      // console.log(id,  title);
       let Heading;
       if(course){
        
          Heading = "Edit Course"
       }else{
            Heading = "Add Course"
       }
        return (
            <div className="container">
                <h1>{Heading}</h1>
                <form ref={(ref) => {this.form = ref; }} onSubmit={(e) => {
                e.preventDefault();
                let newCourse = {
                    id: id,
                    title: e.target[0].value,
                    authorId: selectedIndex,
                    category: e.target[2].value
                };
                this.props.addNewCourse(newCourse);
            }}>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" className="form-control" 
                         ref={node => (title= node)}
                         defaultValue={title}/>
                    </div>
                    <div className="form-group">
                        <label>Author</label>
                        <select className="form-control" ref={node => (authorId=node)}
                        defaultValue={authorId}
                        onChange={e => {selectedIndex = e.target.options.selectedIndex}}>
                            <option>Select Author</option>
                            {this.props.authors.map(author => 
                            <option key={author.id} value={author.name}> {author.name} </option>)}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <input type="text" className="form-control" 
                        ref={node => (category= node)}
                        defaultValue={category}/>
                    </div>
                    <button type="submit" className="btn btn-primary">
                     Save</button>
                    </form>  
            </div>
        );
    }
    
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Addcourse));

import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './Courses';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Button, Layout, Typography, Form, Input, Select } from 'antd';
import 'antd/dist/antd.css';

const { Content } = Layout;

const { Title } = Typography;

class Addcourse extends React.Component {


    render() {
        
        let course = this.props.location.query;
        let { id, title, authorId, category } = course ? course.item : "";
        
        if (this.props.redirect) {
            return <Redirect to="/courses" />
        }

        let Heading;
        if (course) {

            Heading = "Edit Course"
        } else {
            Heading = "Add Course"
        }
        return (
            <Content style={{ width: "70%", paddinng: 20, marginLeft: 20 }}>
                <Title>{Heading}</Title>
                <Form labelCol={{
                    span: 4,
                }}
                    onFinish={(values) => {

                        let newCourse = {
                            id: id ? id : null,
                            title: values.title,
                            authorId: values.author,
                            category: values.category
                        };
                        //console.log(newCourse)
                        this.props.addNewCourse(newCourse);
                    }}>
                    <Form.Item label="Title"
                        name="title"
                        initialValue={title}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Author"
                        name="author"
                        initialValue={authorId}>
                        <Select>
                            <Select.Option>Select Author</Select.Option>
                            {this.props.authors.map(author =>
                                <Select.Option key={author.id} value={author.id}> {author.name} </Select.Option>)}
                        </Select>
                    </Form.Item>
                    <Form.Item label="Category"
                        name="category"
                        initialValue={category}>
                        <Input />
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" htmlType="submit">
                            Save
                        </Button>
                    </Form.Item>
                </Form>
                {/* <form ref={(ref) => {this.form = ref; }} onSubmit={(e) => {
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
                    </form>   */}
            </Content>
        );
    }

}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Addcourse));

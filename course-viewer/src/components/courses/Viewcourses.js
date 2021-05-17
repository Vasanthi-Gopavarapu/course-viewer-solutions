import React from 'react';
import '../../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';


const Viewcourses = (props) => {
    let items = props.params;
    const course = items.map((item, i) => {
        let { slug } = item;
        return (
            <tr key={item.id}>
                <td><span className="badge badge-light">Watch</span></td>
                <td>

                    <Link to={{
                        pathname: `/course/${slug}`,
                        query: {
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
                        props.onClick(item.id);
                    }}>Delete</button></td>
            </tr>

        );
    }
    );
    return course;
}

export default Viewcourses;


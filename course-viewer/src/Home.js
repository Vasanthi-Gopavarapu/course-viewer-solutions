import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from 'react-router-dom';
import { Button, Layout, Typography } from 'antd';
import 'antd/dist/antd.css';

const { Content } = Layout;
const { Title, Text } = Typography;

function Home() {
    return (
        <Layout style={{backgroundColor: "#f5f5f5", width: "70%", padding: 20}} >
            <Title>PluralSight Administration</Title>
            <Text strong style={{paddingBottom: 20}}>React, Redux, and React Router for ultra-responsive web apps. </Text>
            <NavLink to="/about" className="text-primary"
                                activeClassName="text-danger">
                        <Button type="primary" size="large">
                            Learn more
                        </Button>
                    </NavLink>
        </Layout>
    )
    // return (
    //     <div className="container p-5 my-3 bg-light">
    //                 <h1>PluralSight Administration</h1>
    //                 <p>React, Redux, and React Router for ultra-responsive web apps. </p>
    //                 <NavLink to="/about" className="text-primary"
    //                             activeClassName="text-danger">
    //                     <button type="button" className="btn btn-primary btn-lg">
    //                         Learn more
    //                     </button>
    //                 </NavLink>
                    
    //             </div>
    // );
}

export default Home;
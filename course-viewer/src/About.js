import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Layout, Typography } from 'antd';
import 'antd/dist/antd.css';

const { Title, Text } = Typography;

function About() {
  
    return (
      <Layout style={{backgroundColor: "#f5f5f5", width: "70%", padding: 20}}>
            <Title>About</Title>
            <Text strong style={{
              fontSize: 18,
              paddingBottom: 20}}>
            This app uses React, Redux, React Router and many other helpful libraries.</Text>
      </Layout>
      // <div className="container p-5 my-3 bg-light">
      //   <h1>About</h1>
      //   <p>This app uses React, Redux, React Router and many other helpful libraries.</p>
      // </div>
    );

} 

export default About;
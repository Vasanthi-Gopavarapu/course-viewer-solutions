import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

class Courses extends React.Component {
    constructor(props) {
        super(props);
        if(this.state === undefined || this.state === null)
        {
             this.state = {
                value: '',
                items: []
             };
        }
             console.log("constructor", this.state);
        
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleChange(e) {
        console.log("handlechange initial state", this.state);
         await this.setState({value: e.target.value});
        console.log(this.state);
    }

    async handleSubmit(e) {
        e.preventDefault();
        console.log("before", this.state);
        
        await this.setState(state => {
             const items = state.items.concat(state.value);

             return {
                 items,
                 value:''
             }
        });
        console.log("after", this.state);
    }

 render(){
     console.log("render");
     //const items = this.state.items;
      return (
        <div className="container p-5 my-3 bg-light">
          <h1>Courses</h1>
          <Addedcourses items={this.state.items}/>
          <h2>Add Courses</h2>
          <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                <label>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Save" />
              </div>
           </form>
     </div> 
      );
 }
      
}


function Addedcourses(props) {
    
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
    
}



export default Courses;
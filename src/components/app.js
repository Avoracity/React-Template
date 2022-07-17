import { useState } from "react";
import React from "react";

// import data from "./testData.json";
import JsonPreview from "./jsonPreview";
// console.log(data);


class App extends React.Component {
constructor(props) {
		super(props);
		this.state = { count: 0 };
	}    
 // const [count, setCount] = useState(0);
  render() {
    return (
      <div>
        This is a sample stateful and server-side
        rendered React application.
        <JsonPreview  />          
        <br />
        Here is a button that will track
        how many times you click it:
        <br />
        <br />
        <button onClick={() => this.setState({count: this.state.count + 1})}>
          Click me
        </button>
      </div>
      
    );
  }
}
//         <JsonPreview {...this.props.formed[0]} />  
//         {this.props.members.map(form => <JsonPreview { ...form} /> )}        <br />

// stateless    <button onClick={() => setCount(count + 1)}>{count}</button>

export default App;
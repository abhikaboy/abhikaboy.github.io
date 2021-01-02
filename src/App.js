import './App.css';
import React, {Component} from 'react';
import Navigation from "./Components/Navigation";
class App extends Component{
    constructor(props){
      super();
      this.props = props;
      this.state = {

      }
    }
  render(){
    return(
      <div>
        <Navigation />
        <p>hahah</p>
      </div>
    );
  }
}
export default App;
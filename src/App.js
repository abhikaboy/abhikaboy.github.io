import './App.css';
import React, {Component} from 'react';
import {Navigation} from "./Components/Navigation";
import {Header} from "./Components/Header";
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
        {/* <Header /> */}
        <Navigation />
      </div>
    );
  }
}
export default App;
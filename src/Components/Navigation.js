import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import Projects from "./Tabs/Projects"
export class Navigation extends Component {
    state = {
        key:"Projects"
    }
    changeTab = (k) => {
        this.setState({ 
            ...this.state,
            key:k
        })
    }
    render() {
        return (
            <div>
                <Tabs id="controlled-tab-example" activeKey={this.state.key} onSelect={this.changeTab} >
                    <Tab eventKey = "Home" title = "Home">sssssssssss</Tab>
                    <Tab eventKey = "Projects" title = "Projects"><Projects /></Tab>
                    <Tab eventKey = "Art" title = "Art">ffffffffffff</Tab> 
                    <Tab eventKey = "Random" title = "Random">vvvvvvvvvvvvvvv</Tab>
                    <Tab eventKey = "Random2" title = "Random2">sssssssssss</Tab>
                </Tabs>
            </div>
        )
    }
}

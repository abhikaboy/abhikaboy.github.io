import "./App.css";
import React, { Component } from "react";
import Projects from "./Components/Tabs/Projects";
import Header from "./Components/Header";
import Intro from "./Components/Tabs/Intro";
import Contact from "./Components/Tabs/Contact";
class App extends Component {
	constructor(props) {
		super();
		this.props = props;
		this.state = {};
	}
	render() {
		return (
			<div style={{ background: "#171E27" }}>
				<Header />
				{/* <Navigation /> */}
				<Intro />
				<Projects />
				<Contact />
				<div style={{ paddingBottom: "20%" }}></div>
			</div>
		);
	}
}
export default App;

import './App.css';
import React, { Component } from 'react';
import Projects from './Components/Tabs/Projects';
import Header from './Components/Header';
import Intro from './Components/Tabs/Intro';
import Contact from './Components/Tabs/Contact';
import Footer from './Components/Tabs/Footer';
import MongoSection from './Components/MongoSection';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, Link } from 'react-router-dom';
import Wharton from './Components/Wharton';
import Main from './Components/Election/Main';
function Page() {
	return (
		<div>
			<Header />
			<ChakraProvider>
				<MongoSection />
				<Intro />
				<Projects />
				<Contact />
				<div style={{ paddingBottom: '20%' }}></div>
				<Footer />
			</ChakraProvider>
		</div>
	);
}
class App extends Component {
	constructor(props) {
		super();
		this.props = props;
		this.state = {};
	}
	render() {
		return (
			<div style={{ background: '#0e1E27' }}>
				<Routes>
					<Route exact path='/' element={<Page />}></Route>
					<Route path='/wharton' element={<Wharton />}></Route>
					<Route path='/election' element={<Main />}></Route>
				</Routes>
			</div>
		);
	}
}
export default App;

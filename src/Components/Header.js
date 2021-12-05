import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import ScrollAnimation from 'react-animate-on-scroll';
export class Header extends Component {
	render() {
		return (
			<div style={{ overflow: 'hidden' }}>
				<ScrollAnimation
					animateIn='fadeInDown'
					delay={0}
					animateOnce
					style={preText}
				>
					<h1>Hi, I'm</h1>
				</ScrollAnimation>
				<ScrollAnimation
					animateIn='fadeIn'
					delay={500}
					style={title}
					animateOnce
				>
					<b>
						<h1>Abhik Ray</h1>
					</b>
				</ScrollAnimation>
				<ScrollAnimation
					animateIn='rotateIn'
					delay={800}
					animateOnce
					style={githubButton}
				>
					<Button
						style={{
							transform: 'translate(-50%,0)',
						}}
						variant='outline-info'
						href='https://github.com/abhikaboy'
						target='_blank'
					>
						Github
					</Button>
				</ScrollAnimation>
				<p></p>
				<Image
					style={headerStyle}
					src={'https://images8.alphacoders.com/105/1059699.png'}
				></Image>
			</div>
		);
	}
}
const githubButton = {
	zIndex: '2',
	position: 'absolute',
	color: 'white',
	textAlign: 'center',
	marginLeft: '50%',
	top: '52vh',
};
const headerStyle = {
	width: '100vw',
	height: '100vh',
	//background:"rgb(41,40,65)"
	background: 'rgb(0,0,0)',
	filter: 'blur(30px) brightness(20%)',
	overflow: 'hidden',
	transform: 'scale(1.1)',
};
const title = {
	textAlign: 'center',
	width: '100%',
	top: '40vh',
	color: 'white',
	fontSize: '4em',
	//background:"linear-gradient(rgba(20,25,33,0.8), rgba(20,25,33,0.8))",
	position: 'absolute',
	zIndex: '2',
	//backdropFilter: "brightness(5%)"
};
const preText = {
	position: 'absolute',
	color: 'white',
	backgroundColor: '#f3ec78',
	backgroundImage: 'linear-gradient(25deg, #34febb, #88b4e7)',
	backgroundSize: '100%',
	WebkitBackgroundClip: 'text',
	fontSize: '1.4em',
	WebkitTextFillColor: 'transparent',
	zIndex: '2',
	top: '37vh',
	transform: 'translate(0%,-100%)',
	width: '100%',
	textAlign: 'center',
};
export default Header;

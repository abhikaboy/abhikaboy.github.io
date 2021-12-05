import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScrollAnimation from 'react-animate-on-scroll';
import me from './images/melol.jpg';
import {
	Box,
	Grid,
	GridItem,
	Center,
	Heading,
	Text,
	Stack,
} from '@chakra-ui/layout';
import { Container, Image } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/media-query';
export class Intro extends Component {
	render() {
		return (
			<div>
				<ScrollAnimation animateIn='fadeInDown' delay={0} style={title}>
					<Heading>Intro.</Heading>
				</ScrollAnimation>

				<ScrollAnimation animateIn='fadeIn' delay={750}>
					<Container>
						<Container centerContent maxW='container.xl'>
							<Center>
								<Stack direction={['column', 'row']} w='60vw' mt='2%'>
									<Image
										src={me}
										w={['90vw', '22vw']}
										w={['90vw', '22vw']}
										borderRadius='20px'
									/>
									<div>
										<Heading textAlign='center' color='#34febb'>
											About Me
										</Heading>
										<Text
											textAlign='center'
											pl='2vw'
											color='white'
											fontSize='15px'
											pt='5%'
											// scale='(0.7,0.7)'
										>
											Howdy! I'm Abhik. It's always a goal of mine to see how I
											can challenge myself. I love a good challenge and I'm
											always seeking out new ways to, as Cloud Strife put it,
											"break the limit." Currently, I'm a Junior in high school
											looking forward to at the very least studying computer
											science in college. Theres so much other things that
											interest me in the world that it would be a shame to just
											limit myself to one subject. For instance, being able to
											study business would help me as a business owner. I own a
											company called Relay Apps LLC which has recently been my
											number one passion for the past few months. Starting a
											company has taught me invaluable information that I would
											never be able to obtain elsewhere. It stretched and
											expanded on what I already knew and taught me things
											things that I would never be able to learn in a classroom.
											That being said, I also have many other passions than
											business and tech. On the side, I'm also a musician
											playing the drum set in the Robbinsville High School Jazz
											Ensemble and turning heads on the Xylo in the Raven
											Regiment Marching Band. I also am an avid member and
											create videos for our schools esports gaming club.
											Actually, I love to spend some time playing Valorant,
											Minecraft, or any other game thats currently caught my
											attention. Recently, I've been getting more and more back
											into Minecraft and making youtube videos with my friend,
											Baablu.
										</Text>
									</div>
								</Stack>
							</Center>
						</Container>
						<Row>
							<Center w='100vw' mt='10vh'>
								<Heading color='#34febb'>Skills</Heading>
							</Center>
						</Row>
					</Container>
					<Center w='100vw' mt='10vh'>
						<Stack direction={['column', 'row']} mt='1%' w={['100vw', '80vw']}>
							<Container>
								<Heading
									fontSize='20px'
									color='white'
									textAlign='center'
									borderRadius='20px'
									borderWidth='2px'
									borderColor='white'
									borderStyle='solid'
									padding='5%'
									w={['90vw', '100%']}
								>
									Design
								</Heading>
								<Center color='white'>
									<ul style={{ color: 'white' }}>
										<li>Adobe Photoshop</li>
										<li>Adobe After Effects</li>
										<li>Adobe Premiere Pro</li>
										<li>Adobe LightRoom</li>
										<li>Figma</li>
									</ul>
								</Center>
							</Container>
							<Container>
								<Heading
									fontSize='20px'
									color='white'
									textAlign='center'
									borderRadius='20px'
									borderWidth='2px'
									borderColor='white'
									borderStyle='solid'
									padding='5%'
									w={['90vw', '100%']}
								>
									Front End
								</Heading>
								<Center color='white'>
									<ul>
										<li>React</li>
										<li>Redux</li>
										<li>ChakraUI</li>
										<li>React Native</li>
										<li>Expo</li>
										<li>Electron</li>
										<li>Axios</li>
									</ul>
								</Center>
							</Container>
							<Container>
								<Heading
									fontSize='20px'
									color='white'
									textAlign='center'
									borderRadius='20px'
									borderWidth='2px'
									borderColor='white'
									borderStyle='solid'
									padding='5%'
									w={['90vw', '100%']}
								>
									Back End
								</Heading>
								<Center color='white'>
									<ul>
										<li>GraphQL</li>
										<li>Apollo Client</li>
										<li>Express</li>
										<li>MongoDB</li>
										<li>AWS</li>
										<li>S3/EC2/Route 53</li>
										<li>Flask</li>
									</ul>
								</Center>
							</Container>
							<Container>
								<Heading
									fontSize='20px'
									color='white'
									textAlign='center'
									borderRadius='20px'
									borderWidth='2px'
									borderColor='white'
									borderStyle='solid'
									padding='5%'
									w={['90vw', '100%']}
								>
									Technologies
								</Heading>
								<Center color='white'>
									<ul>
										<li>Git</li>
										<li>JavaScript</li>
										<li>Python</li>
										<li>Java</li>
										<li>HTML/CSS</li>
									</ul>
								</Center>
							</Container>
						</Stack>
					</Center>
					<Container pt='30vh'></Container>
				</ScrollAnimation>
			</div>
		);
	}
}
const portrait = {
	display: '',
	width: '100%',
};
const text = {
	color: 'white',
	fontSize: '1.1em',
	// fontFamily: 'Inter',
	fontFamily: 'Raleway',
	textAlign: 'center',
	paddingBottom: '4%',
};
const heading = {
	color: '#34febb',
	fontSize: '1em',
	textAlign: 'center',
	paddingBottom: '2%',
};
const headingAlt = {
	color: '#34febb',
	fontSize: '1em',
	textAlign: 'center',
	marginBottom: '2%',
};
const title = {
	color: '#34febb',
	marginTop: '15%',
	paddingLeft: '20%',
};
export default Intro;

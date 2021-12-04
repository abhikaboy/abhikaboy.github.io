import React, { Component } from 'react';
import { ProjectEntry } from './ProjectEntry';
import { ProjectEntryAlt } from './ProjectEntryAlt';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScrollAnimation from 'react-animate-on-scroll';

export class Projects extends Component {
	render() {
		return (
			<div style={{ backgroundColor: '#1D262F' }}>
				<Container fluid>
					<Row>
						<div class='custom-shape-divider-top-1610350102'>
							<svg
								data-name='Layer 1'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 1200 120'
								preserveAspectRatio='none'
							>
								<path
									d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
									class='shape-fill'
								></path>
							</svg>
						</div>
					</Row>
					<Row>
						<Col md={1} sm></Col>
						<Col md={11} sm>
							<Container fluid>
								<Row style={{ paddingBottom: '5%' }}>
									<ScrollAnimation
										animateIn='fadeInDown'
										delay={0}
										style={title}
									>
										<h2>Projects</h2>
									</ScrollAnimation>
								</Row>
								<Row style={{ marginBottom: '10vh' }}>
									<ScrollAnimation animateIn='fadeInLeft' delay={200}>
										<ProjectEntryAlt
											img={
												'https://cdn.discordapp.com/attachments/760776202121117706/916804189194174514/menu_bg.png'
											}
											description={
												'Venusian Village was the first place winner in the 2020 Future Hacks Hackathon. This is a full stack project that was built in just under 48 hours completely in python. The actual project is a game inspired by Fallout Shelter that takes on Venus, the goal is to expand your habitat and create a thriving population'
											}
											name={'Venusian Village'}
											ghub='https://github.com/abhikaboy/venus'
										/>
									</ScrollAnimation>
								</Row>
								<Row style={{ marginBottom: '10vh' }}>
									<ScrollAnimation animateIn='fadeInRight' delay={200}>
										<ProjectEntry
											img={
												'https://cdn.discordapp.com/attachments/799491152789110806/800151716934189106/echidna_icon.png'
											}
											description={
												'Echidna is a discord bot that allows users to play minigames within discord like Connect 4 and schedule server wide events.' +
												' Echidna was utilized during online school to send schedule updates and tell kids when the next class starts or ends.'
											}
											name={'Echidna'}
											x1='0'
											y1='0'
											x2='100%'
											y2='75%'
											ghub='https://github.com/abhikaboy/echidna-bot'
										/>
									</ScrollAnimation>
								</Row>
								<Row style={{ marginBottom: '10vh' }}>
									<ScrollAnimation animateIn='fadeInLeft' delay={400}>
										<ProjectEntryAlt
											img={
												'https://cdn.discordapp.com/attachments/760776202121117706/800819384020631602/brawlhouse.png'
											}
											description={
												'Brawl house is a Super Smash Bros inspired 2d platformer fighting game. You can choose from a selection of ' +
												'characters wiith unique abilities to fight in real time using Node.js and Sockets.io. This game was made in p5.js and' +
												' HTML + CSS'
											}
											name={'Brawl House'}
											x1='100%'
											y1='25%'
											x2='0%'
											y2='100%'
											ghub='https://github.com/abhikaboy/brawl-hosue'
										/>
									</ScrollAnimation>
								</Row>
								<Row style={{ marginBottom: '10vh' }}>
									<ScrollAnimation animateIn='fadeInRight' delay={400}>
										<ProjectEntry
											img={
												'https://cdn.discordapp.com/attachments/760776202121117706/800847721556344832/nemesis.png'
											}
											description={
												'This is a PWA that I developed with my FRC' +
												' robotics team to help out in competitions. ' +
												' Scouting is a the main way to gather intel about ' +
												' other robots present at competitions and to help ' +
												' us pick out alliance. This App provides a way ' +
												' for our team to electronically gather this ' +
												' information and manage and analyze this. This ' +
												' app works completely offline and online to adapt ' +
												' to different competition settings. '
											}
											name={'FRC Scouting'}
											// x1='100%'
											// y1='25%'
											// x2='0%'
											// y2='110%'
											ghub='https://github.com/abhikaboy/MasterScout'
										/>
									</ScrollAnimation>
								</Row>

								<Row style={{ marginBottom: '10vh' }}>
									<ScrollAnimation animateIn='fadeInLeft' delay={400}>
										<ProjectEntryAlt
											img={
												'https://cdn.discordapp.com/attachments/760776202121117706/916806982311223406/apple-icon-25.png'
											}
											description={
												'This was a simple web app that would give users a better shopping experience ' +
												'This was integrated with a back end and would update data from the front end' +
												'Made with React.js, Node.js and Redux'
											}
											name={'Grocery Ecommerce'}
											ghub='https://github.com/abhikaboy/groceries-ecommerce'
										/>
									</ScrollAnimation>
								</Row>
							</Container>
						</Col>
					</Row>
				</Container>
				<Row>
					<div
						class='custom-shape-divider-top-1610350102'
						style={{ transform: 'scaleY(-1)', overflow: 'hidden' }}
					>
						<svg
							data-name='Layer 1'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 1200 120'
							preserveAspectRatio='none'
						>
							<path
								d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
								class='shape-fill'
							></path>
						</svg>
					</div>
				</Row>
			</div>
		);
	}
}
const title = {
	color: '#34febb',
	marginTop: '5%',
	paddingLeft: '20%',
};

export default Projects;

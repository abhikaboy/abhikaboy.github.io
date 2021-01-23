import React, { Component } from "react";
import { ProjectEntry } from "./ProjectEntry";
import { ProjectEntryAlt } from "./ProjectEntryAlt";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export class Projects extends Component {
	render() {
		return (
			<div style={{ backgroundColor: "#1D262F" }}>
				<Container fluid>
					<Row>
						<div class='custom-shape-divider-top-1610350102'>
							<svg
								data-name='Layer 1'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 1200 120'
								preserveAspectRatio='none'>
								<path
									d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
									class='shape-fill'></path>
							</svg>
						</div>
					</Row>
					<Row>
						<Col md={1}></Col>
						<Col md={11}>
							<Container fluid>
								<Row style={{ paddingBottom: "5%" }}>
									<h2 style={title}>Projects</h2>
								</Row>
								<Row style={{ marginBottom: "4%" }}>
									<ProjectEntry
										img={
											"https://cdn.discordapp.com/attachments/799491152789110806/800151716934189106/echidna_icon.png"
										}
										description={
											"Echidna is a discord bot that allows users to play minigames within discord like Connect 4 and schedule server wide events." +
											" Echidna was utilized during online school to send schedule updates and tell kids when the next class starts or ends."
										}
										name={"Echidna"}
										x1='0'
										y1='0'
										x2='100%'
										y2='75%'
										ghub='https://github.com/abhikaboy/echidna-bot'
									/>
								</Row>
								<Row style={{ marginBottom: "4%" }}>
									<ProjectEntryAlt
										img={
											"https://cdn.discordapp.com/attachments/760776202121117706/800819384020631602/brawlhouse.png"
										}
										description={
											"Brawl house is a Super Smash Bros inspired 2d platformer fighting game. You can choose from a selection of " +
											"characters wiith unique abilities to fight in real time using Node.js and Sockets.io. This game was made in p5.js and" +
											" HTML + CSS"
										}
										name={"Brawl House"}
										x1='100%'
										y1='25%'
										x2='0%'
										y2='100%'
										ghub='https://github.com/abhikaboy/brawl-hosue'
									/>
								</Row>
								<Row style={{ marginBottom: "4%" }}>
									<ProjectEntry
										img={
											"https://cdn.discordapp.com/attachments/760776202121117706/800847721556344832/nemesis.png"
										}
										description={
											"This is a PWA that I developed with my FRC" +
											" robotics team to help out in competitions. " +
											" Scouting is a the main way to gather intel about " +
											" other robots present at competitions and to help " +
											" us pick out alliance. This App provides a way " +
											" for our team to electronically gather this " +
											" information and manage and analyze this. This " +
											" app works completely offline and online to adapt " +
											" to different competition settings. "
										}
										name={"FRC Scouting"}
										// x1='100%'
										// y1='25%'
										// x2='0%'
										// y2='110%'
										ghub='https://github.com/abhikaboy/MasterScout'
									/>
								</Row>

								<Row style={{ marginBottom: "4%" }}>
									<ProjectEntryAlt
										img={
											"https://cdn0.iconfinder.com/data/icons/food-set-4/64/Artboard_12_copy-512.png"
										}
										description={
											"This was a simple web app that would give users a better shopping experience " +
											"This was integrated with a back end and would update data from the front end" +
											"Made with React.js, Node.js and Redux"
										}
										name={"Grocery Ecommerce"}
										x1='0%'
										y1='0%'
										x2='100%'
										y2='50%'
										ghub='https://github.com/abhikaboy/groceries-ecommerce'
									/>
								</Row>
							</Container>
						</Col>
					</Row>
				</Container>
				<Row>
					<div
						class='custom-shape-divider-top-1610350102'
						style={{ transform: "scaleY(-1)" }}>
						<svg
							data-name='Layer 1'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 1200 120'
							preserveAspectRatio='none'>
							<path
								d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
								class='shape-fill'></path>
						</svg>
					</div>
				</Row>
			</div>
		);
	}
}
const title = {
	color: "#34febb",
	marginTop: "5%",
	paddingLeft: "20%",
};

export default Projects;

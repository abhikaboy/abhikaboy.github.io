import React, { Component } from "react";
import { ProjectEntry } from "./ProjectEntry";
import { ProjectEntryAlt } from "./ProjectEntryAlt";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
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
					<Row style={{ paddingBottom: "5%" }}>
						<h2 style={title}>Projects</h2>
					</Row>
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
					/>
					<Row>
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
						/>
					</Row>
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
					/>
					<Row>
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
						/>
					</Row>
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
				</Container>
				{/* <ProjectEntry url="https://cdn.discordapp.com/attachments/672093513546203156/796983512309432320/unknown.png" alternate={true} title = {"Battle House"}/>
                <ProjectEntry url="https://cdn.discordapp.com/attachments/672093513546203156/796982733451952138/ScoutingApp.jpg" alternate={false} title = {"FRC Scouting App"}/>
                <ProjectEntry url="https://cdn.discordapp.com/attachments/672093513546203156/796982735632990228/groceries.jpg" alternate={true} title = {"Grocery Ecommerce"}/> */}
			</div>
		);
	}
}
const headerStyle = {
	textAlign: "center",
	padding: "2%",
	color: "white",
};
const title = {
	color: "#34febb",
	marginTop: "5%",
	paddingLeft: "20%",
};

export default Projects;

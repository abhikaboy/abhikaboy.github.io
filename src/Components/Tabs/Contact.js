import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

export class Contact extends Component {
	render() {
		return (
			<div>
				<h2 style={title}>Contact</h2>
				<Container>
					<Row>
						<Col>
							<Image
								style={image}
								src={"https://i.imgur.com/ZOKp8LH.jpg"}></Image>
						</Col>
						<Col>
							<Image
								style={image}
								src={
									"https://image.flaticon.com/icons/png/512/25/25231.png"
								}></Image>
						</Col>
						<Col>
							<div style={{ paddingBottom: "15%" }}></div>
							<Image
								style={image}
								src={
									"https://i.pinimg.com/originals/bb/18/bd/bb18bdbbef437b2d50518db5a8292c94.png"
								}></Image>
						</Col>
					</Row>
					<Row style={contactText}>
						<Col>
							<h4>Suntex#0101</h4>
						</Col>
						<Col>
							<h4>abhikaboy</h4>
						</Col>
						<Col>
							<h4>abhikaboy@gmail.com</h4>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
const title = {
	color: "#34febb",
	marginTop: "5%",
	paddingLeft: "20%",
};
const contactText = {
	color: "white",
	textAlign: "center",
};
const image = {
	width: "100%",
	textAlign: "center",
	margin: "auto",
	filter: "brightness(0%) invert(1)",
	transform: "scale(0.5)",
};
export default Contact;

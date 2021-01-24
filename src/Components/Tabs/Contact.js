import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import ScrollAnimation from "react-animate-on-scroll";

export class Contact extends Component {
	render() {
		return (
			<div>
				<ScrollAnimation animateIn='fadeInDown' delay={0}>
					<h2 style={title}>Contact</h2>
				</ScrollAnimation>
				<Container>
					<Row>
						<Col sm>
							<ScrollAnimation animateIn='rotateIn' delay={250}>
								<Image
									style={image}
									src={"https://i.imgur.com/ZOKp8LH.jpg"}
								/>
							</ScrollAnimation>
						</Col>
						<Col sm>
							<ScrollAnimation animateIn='rotateIn' delay={500}>
								<Image
									style={image}
									src={
										"https://image.flaticon.com/icons/png/512/25/25231.png"
									}
								/>
							</ScrollAnimation>
						</Col>
						<Col sm>
							{" "}
							<div style={{ paddingBottom: "15%" }}></div>
							<ScrollAnimation animateIn='rotateIn' delay={750}>
								<Image
									style={image}
									src={
										"https://i.pinimg.com/originals/bb/18/bd/bb18bdbbef437b2d50518db5a8292c94.png"
									}
								/>
							</ScrollAnimation>
						</Col>
					</Row>
					<Row style={contactText}>
						<Col sm>
							<ScrollAnimation animateIn='fadeInUp' delay={1250}>
								<h4>Suntex#0101</h4>
							</ScrollAnimation>
						</Col>
						<Col sm>
							<ScrollAnimation animateIn='fadeInUp' delay={1500}>
								<h4>abhikaboy</h4>
							</ScrollAnimation>
						</Col>
						<Col sm>
							<ScrollAnimation animateIn='fadeInUp' delay={1750}>
								<h4>abhikaboy@gmail.com</h4>
							</ScrollAnimation>
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

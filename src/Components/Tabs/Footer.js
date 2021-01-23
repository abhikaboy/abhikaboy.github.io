import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export class Footer extends Component {
	render() {
		return (
			<Container fluid style={footerStyle}>
				<Row>
					<Col>© Abhik Ray</Col>
				</Row>
			</Container>
		);
	}
}
const footerStyle = {
	color: "white",
	backgroundColor: "rgb(13,20,29)",
	padding: "1%",
	textAlign: "center",
};
export default Footer;

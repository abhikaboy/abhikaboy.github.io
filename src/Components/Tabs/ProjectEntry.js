import React, { Component } from "react";
import { AnimationWrapper } from "react-hover-animation";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
export class ProjectEntry extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<Row>
				<svg
					width='100%'
					height='50%'
					style={{
						height: "80%",
						width: "100vw",
						position: "absolute",
						zIndex: "0",
						mixBlendMode: "overlay",
					}}>
					<line
						x1={this.props.x1}
						y1={this.props.y1}
						x2={this.props.x2}
						y2={this.props.y2}
						style={{
							stroke: "#34febb",
							strokeWidth: "4",
							position: "absolute",
							zIndex: "0",
						}}></line>
				</svg>
				<Col md={2}></Col>
				<Col>
					<Image
						src={this.props.img}
						style={{
							width: "70%",
							margin: "5%",
							zIndex: "90",
						}}
					/>
				</Col>
				<Col>
					<h2
						style={{
							color: "#34febb",
							textAlign: "right",

							paddingTop: "20%",
						}}>
						{this.props.name}
					</h2>
					<p
						style={{
							color: "white",
							textAlign: "right",
						}}>
						{this.props.description}
					</p>
				</Col>
				<Col></Col>
			</Row>
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
export default ProjectEntry;

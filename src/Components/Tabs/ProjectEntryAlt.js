import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Center, Heading } from '@chakra-ui/layout';
export class ProjectEntryAlt extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<Row>
				<Col md={2} sm></Col>
				<Col md={7} sm>
					<Container
						fluid
						style={{
							border: '5px solid',
							borderRadius: '20px',
							borderColor: 'white',
							width: '100%',
							padding: '5%',
							paddingBottom: '5%',
						}}
					>
						<Row>
							<Col sm>
								<Heading
									style={{
										color: '#34febb',
										textAlign: 'left',
										// paddingTop: '20%',
									}}
									size='md'
								>
									{this.props.name}
								</Heading>
								<p
									style={{
										color: 'white',
										textAlign: 'left',
									}}
								>
									{this.props.description}
								</p>
								<Button
									style={githubButton}
									variant='outline-info'
									target='_blank'
									href={this.props.ghub}
								>
									Github
								</Button>
							</Col>
							<Col sm>
								<Center>
									<Image
										src={this.props.img}
										style={{
											width: '100%',
											margin: '0%',
											zIndex: '90',
											alignSelf: 'center',
											justifyItems: 'center',
											justifySelf: 'center',
											borderRadius: '20px',
											marginTop: '50%',
											transform: 'translateY(-50%)',
										}}
									/>
								</Center>
							</Col>
						</Row>
					</Container>
				</Col>
				<Col></Col>
			</Row>
		);
	}
}
const githubButton = {
	zIndex: '2',
	position: 'absolute',
	color: 'white',
	textAlign: 'right',
};
export default ProjectEntryAlt;

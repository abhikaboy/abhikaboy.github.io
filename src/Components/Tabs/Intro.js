import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export class Intro extends Component {
    render() {
        return (
            <div>
                <h2 style = {title}>Intro.</h2>
                <h2>_</h2>
                <Container>
                    <Row>
                        <Col md = {3}></Col>
                        <Col style = {heading}><h4>About Me.</h4></Col>
                    </Row>
                    <Row>
                        <Col md = {3}>
                            <Image style = {portrait} src = {"https://i.pinimg.com/736x/cc/48/63/cc486372f0b48ee7a8eeb329665f5bd9.jpg"}></Image>
                        </Col>
                        <Col>
                            <p style  ={text}>Hi! I'm Abhik Ray, a sophomore at Robbinsville High School with passion for Computer Science. I also write code for FRC2590 - Nemesis.
                               Outside of the techlab and school, I also am in Robbinsville's Marching Band and Jazz Band. Aside from school, I love to work on personal projects or 
                               chat with my friends while playing video games.

                            </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                        </Col>
                        <Col md = {3}>
                        <Col style = {headingAlt}><h4>Skills.</h4></Col>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Container style = {{margin:"0px", padding:"0px", color:"white",fontFamily: 'Raleway'}}>
                                <Row style = {{padding:"10px"}}>
                                    <Col>
                                    {"<>"} Javasript (ES6)
                                    </Col>
                                    <Col>
                                    {"<>"} Node.js
                                    </Col>
                                    <Col>
                                    {"<>"}   React
                                    </Col>
                                </Row>
                                <Row style = {{padding:"10px"}}>
                                    <Col>
                                    {"<>"} Java
                                    </Col>
                                    <Col>
                                    {"<>"} Python (basics)
                                    </Col>
                                    <Col>
                                    {"<>"} Redux
                                    </Col>
                                </Row>
                                <Row style = {{padding:"10px"}}>
                                    <Col>
                                        {"<>"} p5.js
                                        </Col>
                                        <Col>
                                        {"<>"} Photoshop
                                        </Col>
                                        <Col>
                                        
                                        </Col>
                                    </Row>
                            </Container>
                        </Col>
                        <Col md = {3}> 
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
const portrait = {
    display:"",
    width:"100%",
}
const text = {
    color:"white",
    fontSize:"1.1em",
   // fontFamily: 'Inter',
    fontFamily: 'Raleway'
}
const heading = {
    color: "#34febb",
    fontSize:"1em",

}
const headingAlt = {
    color: "#34febb",
    fontSize:"1em",
    textAlign:"left",
}
const title = {
    color: "#34febb",
    marginTop: "15%",
    paddingLeft: "20%",
}
export default Intro

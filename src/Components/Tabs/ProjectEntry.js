import React, { Component } from 'react'
import Image from "react-bootstrap/Image";


export class ProjectEntry extends Component {
    render() {
        return (
            <div style = {yummy}>
                <h3 style = {title}>Echidna - Discord Bot</h3>
                <p style = {description}>uhhhhhh descriptionaaa</p>
                <Image src={this.props.url} style = {thumbnail}></Image>
            </div>
        )
    }
}
const yummy = {
    clipPath: "polygon(0 8%, 100% 0, 100% 94%, 0 100%)",
    background:"lightblue",
    height:"40vh",
    wdith:"100%",
    padding:"0px"
}
const thumbnail = {
    height:"100%",
    left:"100%",
    positon:"absolute",
}
const title = {
    textAlign:"center",
    color:"white",
    position:"absolute",
    left:"40%",
    top:'25%',
    fontSize:"3em"
}
const description = {
    textAlign:"center",
    color:"white",
    position:"absolute",
    top:'30%',
    left: "35%",
    fontSize:"2em"
}

export default ProjectEntry

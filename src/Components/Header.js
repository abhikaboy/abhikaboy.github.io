import React, { Component } from 'react'
import Image from 'react-bootstrap/Image';
export class Header extends Component {
    render() {
        return (
            <div >
                <h3 style = {preText}>Hi, I'm</h3>
                <h1 style = {title}>Abhik Ray</h1>
                <p></p>
                <Image style = {headerStyle} src = {"https://images8.alphacoders.com/105/1059699.png"}></Image>
            </div>
        )
    }
}
const headerStyle = {
    width:"100%",
    height: "100vh",
    //background:"rgb(41,40,65)"
    background: "rgb(0,0,0)",
    filter:"blur(30px) brightness(20%)",
    overflow: "hidden",
    transform: "scale(1.1)"

}
const title = {
    textAlign:"center",
    width:"100%",
    marginTop:"20%",
    color:"white",
    fontSize:"5em",
    //background:"linear-gradient(rgba(20,25,33,0.8), rgba(20,25,33,0.8))",
    position:"absolute",
    zIndex:"2",
    //backdropFilter: "brightness(5%)"
}
const preText = {
    position:"absolute",
    color:"white",
    backgroundColor: "#f3ec78",
    backgroundImage: "linear-gradient(25deg, #34febb, #88b4e7)",
    backgroundSize: "100%",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    zIndex:"2",
    marginTop:"20%",
    transform: "translate(0%,-100%)",
    width:"100%",
    textAlign: "center",

}
export default Header

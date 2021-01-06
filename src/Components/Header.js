import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div style = {headerStyle}>
                {/* <div style = {bg}></div> */}
                {/* <h1 style = {title}> Baablu Bussiness</h1> */}
            </div>
        )
    }
}
const headerStyle = {
    position:"sticky",

}
const bg = {
    background: 'url("https://wallpaperaccess.com/full/426901.jpg") bottom right',
    filter:' blur(15px) brightness(80%)',
    webkitfilter: 'blur(8px)',
    padding:'5%',
    
}
const title = {
    textAlign: 'center',  
    position: 'absolute',
    top:"30%",
    left:"40%", 
    color:"white",
    fontSize:"3em",
    backdropFilter:"brightness(70%)",
    padding:"1%"
}
export default Header

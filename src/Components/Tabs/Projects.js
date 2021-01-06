import React, { Component } from 'react'
import { ProjectEntry } from './ProjectEntry'
export class Projects extends Component {
    render() {
        return (
            <div>
                <h2 style = {headerStyle} >Projects</h2>
                <ProjectEntry url="https://cdn.discordapp.com/attachments/760776202121117706/796173415798538250/unknown.png"/>
            </div>
        )
    }
}
const headerStyle = {
    textAlign: 'center',
    padding: '2%',
}
export default Projects
